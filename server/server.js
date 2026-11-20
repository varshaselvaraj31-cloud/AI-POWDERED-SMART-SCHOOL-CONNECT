import app from './src/app.js';
import env from './src/config/env.js';
import connectDB from './src/config/db.js';

/**
 * Start the HTTP server and initialize database connection.
 */
const startServer = () => {
  // Start Express HTTP Server immediately so endpoints and health checks are accessible
  const server = app.listen(env.PORT, () => {
    console.log('====================================================');
    console.log(`🚀 Smart School Connect Server running!`);
    console.log(`📡 URL: http://localhost:${env.PORT}`);
    console.log(`🩺 Health Check: http://localhost:${env.PORT}/health`);
    console.log(`🌐 API V1 Health: http://localhost:${env.PORT}${env.API_PREFIX}/health`);
    console.log(`🛠️  Environment: ${env.NODE_ENV}`);
    console.log('====================================================');
  });

  // Initialize MongoDB connection asynchronously
  connectDB().catch((err) => {
    console.error(`[Database Error] Initialization failure: ${err.message}`);
  });


  // Handle Unhandled Promise Rejections
  process.on('unhandledRejection', (err) => {
    console.error(`[Unhandled Rejection]: ${err.message}`);
    // Close server & exit gracefully if critical
  });

  // Handle Uncaught Exceptions
  process.on('uncaughtException', (err) => {
    console.error(`[Uncaught Exception]: ${err.message}`);
    process.exit(1);
  });

  // Handle Process Termination (Ctrl+C / Kill)
  const gracefulShutdown = () => {
    console.log('\n[Server] Gracefully shutting down HTTP server...');
    server.close(() => {
      console.log('[Server] HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
};

startServer();
