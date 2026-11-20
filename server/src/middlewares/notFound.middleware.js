import { ApiError } from '../utils/apiError.js';

/**
 * Middleware to catch 404 (Route Not Found) and forward to global error handler.
 */
export const notFoundHandler = (req, res, next) => {
  const error = new ApiError(404, `Cannot ${req.method} ${req.originalUrl} - Route not found`);
  next(error);
};

export default notFoundHandler;
