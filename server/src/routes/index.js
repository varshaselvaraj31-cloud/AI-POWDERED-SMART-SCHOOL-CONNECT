import { Router } from 'express';
import healthRoutes from './health.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

// ── Health Check ─────────────────────────────────────────────────────────────
router.use('/health', healthRoutes);

// ── Authentication ───────────────────────────────────────────────────────────
router.use('/auth', authRoutes);

// ── Future Routes (to be added as features are built) ────────────────────────
// router.use('/students', studentRoutes);
// router.use('/teachers', teacherRoutes);
// router.use('/parents', parentRoutes);
// router.use('/attendance', attendanceRoutes);
// router.use('/assignments', assignmentRoutes);
// router.use('/ai', aiRoutes);

export default router;
