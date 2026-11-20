import notFoundHandler from './notFound.middleware.js';
import errorHandler from './error.middleware.js';
import { protect, restrictTo } from './auth.middleware.js';

export { notFoundHandler, errorHandler, protect, restrictTo };
export default { notFoundHandler, errorHandler, protect, restrictTo };

