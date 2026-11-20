import mongoose from 'mongoose';

/**
 * Student Profile Model – Stores school-specific details for a Student user.
 *
 * Every student has ONE User document (for login) and ONE Student document
 * (for academic profile). The User.profileRef links to this document.
 */
const studentSchema = new mongoose.Schema(
  {
    // Links back to the User document that owns this profile
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    admissionNumber: {
      type: String,
      required: [true, 'Admission number is required'],
      unique: true,
      trim: true,
      uppercase: true,
    },
    grade: {
      type: String,
      required: [true, 'Grade/Class is required'],
      trim: true,
    },
    section: {
      type: String,
      trim: true,
      default: 'A',
    },
    parentPhone: {
      type: String,
      required: [true, 'Parent phone number is required for emergency alerts'],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    address: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const Student = mongoose.model('Student', studentSchema);
export default Student;
