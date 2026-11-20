import jwt from 'jsonwebtoken';
import env from '../config/env.js';
import { User } from '../models/index.js';
import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

/**
 * Validates incoming requests that require an authenticated user.
 *
 * How it works:
 * 1. Reads the JWT token from the Authorization header ("Bearer <token>")
 *    or from the "school_token" cookie.
 * 2. Verifies the token with JWT_SECRET from .env.
 * 3. Looks up the user in MongoDB to confirm they still exist and are active.
 * 4. Attaches the user object to req.user so route handlers can use it.
 *
 * Usage: Add `protect` before any route handler that needs authentication.
 *   router.get('/profile', protect, getProfileController);
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Try Authorization header first (Bearer token – used by frontend Axios)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // 2. Fallback: try cookie (useful for browser-based sessions)
  else if (req.cookies && req.cookies.school_token) {
    token = req.cookies.school_token;
  }

  if (!token) {
    return next(new ApiError(401, 'Authentication required. Please log in to access this resource.'));
  }

  // 3. Verify the token signature and expiry against JWT_SECRET
  let decoded;
  try {
    decoded = jwt.verify(token, env.JWT_SECRET);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return next(new ApiError(401, 'Your session has expired. Please log in again.'));
    }
    return next(new ApiError(401, 'Invalid authentication token. Please log in again.'));
  }

  // 4. Find the user and confirm they still exist and are active
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new ApiError(401, 'The account associated with this token no longer exists.'));
  }

  if (!currentUser.isActive) {
    return next(new ApiError(403, 'Your account has been deactivated. Please contact school administration.'));
  }

  // 5. Attach user to request object for downstream use
  req.user = currentUser;
  next();
});

/**
 * Restricts access to specific roles only.
 *
 * Usage: Add `restrictTo('admin', 'teacher')` after `protect` on a route.
 *   router.delete('/users/:id', protect, restrictTo('admin'), deleteUserController);
 *
 * @param {...string} roles - Allowed role names
 */
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          403,
          `Access denied. This action is restricted to: ${roles.join(', ')}. Your role is: ${req.user.role}.`
        )
      );
    }
    next();
  };
};

export default { protect, restrictTo };
