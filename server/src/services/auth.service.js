import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import env from '../config/env.js';
import { User, Student, Teacher, Parent } from '../models/index.js';
import { ApiError } from '../utils/apiError.js';

/**
 * Auth Service – Contains all business logic for authentication.
 *
 * This layer is intentionally separate from the controller (HTTP layer)
 * and the model (database layer), following the Clean Architecture pattern.
 *
 * Rules enforced here:
 * - Passwords are NEVER returned or logged.
 * - JWT tokens are signed with JWT_SECRET from environment.
 * - Each role gets its own profile document in addition to the base User.
 */

// ─── Helper: Generate a signed JWT token ─────────────────────────────────────
const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN }
  );
};

// ─── Helper: Format safe user payload (no password, no internal fields) ──────
const formatUserPayload = (user, profile = null) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  phone: user.phone,
  avatar: user.avatar,
  isActive: user.isActive,
  createdAt: user.createdAt,
  ...(profile && { profile }),
});

// ─── Validate required fields ─────────────────────────────────────────────────
const requireFields = (fields, body) => {
  const missing = fields.filter((f) => !body[f] || String(body[f]).trim() === '');
  if (missing.length > 0) {
    throw new ApiError(400, `Missing required fields: ${missing.join(', ')}`);
  }
};

// ─── 1. Register Student ──────────────────────────────────────────────────────
export const registerStudent = async (data) => {
  const { name, email, password, admissionNumber, grade, parentPhone, phone } = data;

  requireFields(['name', 'email', 'password', 'admissionNumber', 'grade', 'parentPhone'], data);

  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long.');
  }

  // Check for duplicate email
  const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
  if (existingUser) {
    throw new ApiError(409, 'An account with this email address already exists. Please log in.');
  }

  // Check for duplicate admission number
  const existingAdmission = await Student.findOne({
    admissionNumber: admissionNumber.trim().toUpperCase(),
  });
  if (existingAdmission) {
    throw new ApiError(409, 'A student profile with this Admission Number already exists.');
  }

  // Create the base User account first
  const user = await User.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password, // Will be hashed by pre-save hook in user.model.js
    role: 'student',
    phone: phone || '',
    profileModel: 'Student',
  });

  // Create the Student profile document linked to the User
  const studentProfile = await Student.create({
    user: user._id,
    admissionNumber: admissionNumber.trim().toUpperCase(),
    grade: grade.trim(),
    parentPhone: parentPhone.trim(),
  });

  // Link the profile reference back into the User document
  user.profileRef = studentProfile._id;
  await user.save({ validateBeforeSave: false });

  const token = generateToken(user._id, user.role);
  return { token, user: formatUserPayload(user, studentProfile) };
};

// ─── 2. Register Teacher ──────────────────────────────────────────────────────
export const registerTeacher = async (data) => {
  const { name, email, password, employeeId, department, phone } = data;

  requireFields(['name', 'email', 'password', 'employeeId', 'department', 'phone'], data);

  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long.');
  }

  const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
  if (existingUser) {
    throw new ApiError(409, 'An account with this email address already exists. Please log in.');
  }

  const existingEmployee = await Teacher.findOne({
    employeeId: employeeId.trim().toUpperCase(),
  });
  if (existingEmployee) {
    throw new ApiError(409, 'A teacher profile with this Employee ID already exists.');
  }

  const user = await User.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password,
    role: 'teacher',
    phone: phone.trim(),
    profileModel: 'Teacher',
  });

  const teacherProfile = await Teacher.create({
    user: user._id,
    employeeId: employeeId.trim().toUpperCase(),
    department: department.trim(),
  });

  user.profileRef = teacherProfile._id;
  await user.save({ validateBeforeSave: false });

  const token = generateToken(user._id, user.role);
  return { token, user: formatUserPayload(user, teacherProfile) };
};

// ─── 3. Register Parent ───────────────────────────────────────────────────────
export const registerParent = async (data) => {
  const { name, email, password, studentAdmissionNumber, relationship, phone } = data;

  requireFields(['name', 'email', 'password', 'studentAdmissionNumber', 'relationship', 'phone'], data);

  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long.');
  }

  const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
  if (existingUser) {
    throw new ApiError(409, 'An account with this email address already exists. Please log in.');
  }

  // Verify the student admission number exists in the database
  const linkedStudent = await Student.findOne({
    admissionNumber: studentAdmissionNumber.trim().toUpperCase(),
  });
  if (!linkedStudent) {
    throw new ApiError(
      404,
      `No student found with admission number "${studentAdmissionNumber}". Please verify and try again.`
    );
  }

  const user = await User.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password,
    role: 'parent',
    phone: phone.trim(),
    profileModel: 'Parent',
  });

  const parentProfile = await Parent.create({
    user: user._id,
    studentAdmissionNumber: studentAdmissionNumber.trim().toUpperCase(),
    relationship: relationship.trim(),
    linkedStudent: linkedStudent._id,
  });

  user.profileRef = parentProfile._id;
  await user.save({ validateBeforeSave: false });

  const token = generateToken(user._id, user.role);
  return { token, user: formatUserPayload(user, parentProfile) };
};

// ─── 4. Login (all roles use the same endpoint) ───────────────────────────────
export const loginUser = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new ApiError(400, 'Both email and password are required to log in.');
  }

  // Explicitly select password since it's excluded by default (select: false)
  const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');

  if (!user) {
    // Vague message on purpose: do not reveal whether email exists
    throw new ApiError(401, 'Invalid credentials. Please check your email and password.');
  }

  if (!user.isActive) {
    throw new ApiError(
      403,
      'This account has been deactivated. Please contact school administration.'
    );
  }

  // Compare entered password with hashed password using the model method
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, 'Invalid credentials. Please check your email and password.');
  }

  // Update last login timestamp
  user.lastLoginAt = new Date();
  await user.save({ validateBeforeSave: false });

  const token = generateToken(user._id, user.role);
  return { token, user: formatUserPayload(user) };
};

// ─── 5. Get Current User Profile (requires protect middleware) ────────────────
export const getMe = async (userId) => {
  const user = await User.findById(userId).populate('profileRef');
  if (!user) {
    throw new ApiError(404, 'User profile not found.');
  }
  return formatUserPayload(user, user.profileRef);
};

// ─── 6. Forgot Password (API structure – email delivery not yet wired) ────────
export const forgotPassword = async (email) => {
  if (!email || !email.trim()) {
    throw new ApiError(400, 'Email address is required to initiate password reset.');
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() });

  // Always return success to prevent email enumeration attacks
  if (!user) {
    return {
      message:
        'If an account with this email exists, password reset instructions have been sent.',
    };
  }

  // TODO: When email service is configured, generate a hashed reset token here
  // and send the reset link via nodemailer or a transactional email provider.
  // Example flow (not yet implemented):
  //   const resetToken = crypto.randomBytes(32).toString('hex');
  //   user.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  //   user.passwordResetExpires = Date.now() + 15 * 60 * 1000; // 15 minutes
  //   await user.save({ validateBeforeSave: false });
  //   await sendResetEmail(user.email, resetToken);

  return {
    message:
      'If an account with this email exists, password reset instructions have been sent.',
  };
};

export default {
  registerStudent,
  registerTeacher,
  registerParent,
  loginUser,
  getMe,
  forgotPassword,
};
