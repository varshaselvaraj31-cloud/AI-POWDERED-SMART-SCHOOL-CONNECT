import mongoose from 'mongoose';
import env from '../config/env.js';

/**
 * Service to aggregate system and database health metrics.
 */
export const getSystemHealth = () => {
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const dbStateCode = mongoose.connection.readyState;
  const dbStatus = dbStatusMap[dbStateCode] || 'unknown';

  const memoryUsage = process.memoryUsage();

  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: `${process.uptime().toFixed(2)}s`,
    environment: env.NODE_ENV,
    database: {
      status: dbStatus,
      host: mongoose.connection.host || 'none',
      name: mongoose.connection.name || 'none',
    },
    system: {
      nodeVersion: process.version,
      platform: process.platform,
      memory: {
        rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
      },
    },
  };
};

export const healthService = { getSystemHealth };
export default healthService;

