/**
 * Higher-order utility function to wrap asynchronous express route handlers.
 * Eliminates boiler-plate try-catch blocks and routes errors to the centralized error middleware.
 *
 * @param {Function} requestHandler - The async route handler function (req, res, next)
 * @returns {Function} Express middleware function
 */
export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
