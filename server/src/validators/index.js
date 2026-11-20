import { ApiError } from '../utils/apiError.js';

/**
 * Higher-order middleware to validate incoming request data (body, query, params)
 * using a validation rule function.
 *
 * @param {Function} validateFn - Function receiving req that returns an array of error messages
 */
export const validate = (validateFn) => {
  return (req, res, next) => {
    const errors = validateFn(req);
    if (errors && errors.length > 0) {
      return next(new ApiError(400, 'Validation Failed', errors));
    }
    next();
  };
};

export default { validate };
