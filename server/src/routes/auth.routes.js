import { Router } from 'express';
import {
  registerStudentController,
  registerTeacherController,
  registerParentController,
  loginController,
  logoutController,
  getMeController,
  forgotPasswordController,
} from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

/**
 * Auth Routes – All endpoints are under /api/v1/auth
 *
 * Public Routes (no authentication required):
 *   POST /api/v1/auth/register/student   – Student self-registration
 *   POST /api/v1/auth/register/teacher   – Teacher/Faculty self-registration
 *   POST /api/v1/auth/register/parent    – Parent/Guardian self-registration
 *   POST /api/v1/auth/login              – Login for all roles (student/teacher/parent/admin)
 *   POST /api/v1/auth/logout             – Clear session/cookie
 *   POST /api/v1/auth/forgot-password    – Request password reset link
 *
 * Protected Routes (JWT token required via Authorization: Bearer <token> header):
 *   GET  /api/v1/auth/me                 – Get current logged-in user profile
 */

const router = Router();

// ── Public Auth Endpoints ────────────────────────────────────────────────────
router.post('/register/student', registerStudentController);
router.post('/register/teacher', registerTeacherController);
router.post('/register/parent', registerParentController);
router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('/forgot-password', forgotPasswordController);

// ── Protected Endpoints ──────────────────────────────────────────────────────
router.get('/me', protect, getMeController);

export default router;
