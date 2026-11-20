import { Router } from 'express';
import { healthController } from '../controllers/health.controller.js';

const router = Router();

/**
 * @route   GET /health or /api/v1/health
 * @desc    API Health & Diagnostic check
 * @access  Public
 */
router.get('/', healthController.checkHealth);

export default router;
