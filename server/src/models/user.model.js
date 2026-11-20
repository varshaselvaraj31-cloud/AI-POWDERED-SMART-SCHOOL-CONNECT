import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * User Model – Central identity record for all school stakeholders.
 *
 * Every person who can log in (student, teacher, parent, admin) has ONE User document.
 * Role-specific details (grade, department, etc.) live in separate profile models
 * (Student, Teacher, Parent) which reference back to this User via profileRef.
 *
 * Passwords are ALWAYS hashed with bcryptjs before saving – never stored in plain text.
 * The password field is hidden from query results by default (select: false).
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false, // Never return password hash in API responses
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'teacher', 'student', 'parent'],
        message: 'Role must be one of: admin, teacher, student, parent',
      },
      default: 'student',
      index: true,
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    // Reference to the role-specific profile document (Student/Teacher/Parent)
    profileRef: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'profileModel',
      default: null,
    },
    profileModel: {
      type: String,
      enum: ['Student', 'Teacher', 'Parent'],
      default: null,
    },
    // Password Reset – stores a hashed token and its expiry. Actual reset flow
    // will be implemented when email service is connected.
    passwordResetToken: {
      type: String,
      default: null,
      select: false,
    },
    passwordResetExpires: {
      type: Date,
      default: null,
      select: false,
    },
    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      // Strip password, reset tokens, and internal fields from every JSON response
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.passwordResetToken;
        delete ret.passwordResetExpires;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// ─── Pre-Save Hook: Hash password before storing ────────────────────────────
// Only runs when the password field is new or modified.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12); // 12 salt rounds
  next();
});

// ─── Instance Method: Compare entered password with stored hash ──────────────
// Used in auth.service.js during login. Never compare passwords manually.
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model('User', userSchema);
export default User;
