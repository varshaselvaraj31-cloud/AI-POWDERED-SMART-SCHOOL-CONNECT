import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';
import {
  registerStudent,
  registerTeacher,
  registerParent,
  loginUser,
  getMe,
  forgotPassword,
} from '../services/auth.service.js';
import env from '../config/env.js';

/**
 * Auth Controller – Handles HTTP request/response layer only.
 *
 * Each function here does exactly three things:
 *   1. Extract and pass data to the auth service (business logic layer).
 *   2. Receive the result back.
 *   3. Send a formatted JSON response using ApiResponse.
 *
 * No business logic or database calls live here — that is the service's job.
 */

// Cookie options for the JWT token (used if you want cookie-based auth)
const cookieOptions = {
  expires: new Date(Date.now() + env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
  httpOnly: true, // Prevents JavaScript on the client from reading the cookie
  secure: env.isProduction, // Only send via HTTPS in production
  sameSite: 'lax',
};

// ─── POST /api/v1/auth/register/student ──────────────────────────────────────
export const registerStudentController = asyncHandler(async (req, res) => {
  const result = await registerStudent(req.body);

  res.cookie('school_token', result.token, cookieOptions);

  return res.status(201).json(
    new ApiResponse(201, result, 'Student account registered successfully.')
  );
});

// ─── POST /api/v1/auth/register/teacher ──────────────────────────────────────
export const registerTeacherController = asyncHandler(async (req, res) => {
  const result = await registerTeacher(req.body);

  res.cookie('school_token', result.token, cookieOptions);

  return res.status(201).json(
    new ApiResponse(201, result, 'Faculty account registered successfully.')
  );
});

// ─── POST /api/v1/auth/register/parent ───────────────────────────────────────
export const registerParentController = asyncHandler(async (req, res) => {
  const result = await registerParent(req.body);

  res.cookie('school_token', result.token, cookieOptions);

  return res.status(201).json(
    new ApiResponse(201, result, 'Parent account registered successfully.')
  );
});

// ─── POST /api/v1/auth/login ─────────────────────────────────────────────────
export const loginController = asyncHandler(async (req, res) => {
  const result = await loginUser(req.body);

  res.cookie('school_token', result.token, cookieOptions);

  return res.status(200).json(
    new ApiResponse(200, result, `Welcome back, ${result.user.name}! Login successful.`)
  );
});

// ─── POST /api/v1/auth/logout ────────────────────────────────────────────────
export const logoutController = asyncHandler(async (req, res) => {
  // Clear the JWT cookie from the browser
  res.cookie('school_token', '', {
    httpOnly: true,
    expires: new Date(0), // Expire immediately
    sameSite: 'lax',
  });

  return res.status(200).json(
    new ApiResponse(200, null, 'You have been logged out successfully.')
  );
});

// ─── GET /api/v1/auth/me ─────────────────────────────────────────────────────
// Requires the protect middleware to be applied on the route
export const getMeController = asyncHandler(async (req, res) => {
  const userProfile = await getMe(req.user._id);

  return res.status(200).json(
    new ApiResponse(200, userProfile, 'User profile retrieved successfully.')
  );
});

// ─── POST /api/v1/auth/forgot-password ───────────────────────────────────────
export const forgotPasswordController = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const result = await forgotPassword(email);

  return res.status(200).json(
    new ApiResponse(200, null, result.message)
  );
});

export default {
  registerStudentController,
  registerTeacherController,
  registerParentController,
  loginController,
  logoutController,
  getMeController,
  forgotPasswordController,
};
