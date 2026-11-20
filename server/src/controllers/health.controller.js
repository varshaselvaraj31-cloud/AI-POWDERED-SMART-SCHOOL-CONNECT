import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';
import healthService from '../services/health.service.js';

/**
 * Controller to handle API health check requests.
 * Route: GET /health or GET /api/v1/health
 */
export const checkHealth = asyncHandler(async (req, res) => {
  const healthData = healthService.getSystemHealth();
  return res
    .status(200)
    .json(new ApiResponse(200, healthData, 'AI-Powered Smart School Connect API is operational'));
});

export const healthController = { checkHealth };
export default healthController;

