import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// No authentication required
router.use('/auth', authRoutes);

// Requires authentication
router.use('/api', authenticateToken, apiRoutes);

export default router;
