import mongoose from 'mongoose';
import env from './env.js';

/**
 * Connect to real MongoDB instance using Mongoose.
 * Listens for connection lifecycle events (connected, error, disconnected).
 */
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging indefinitely
    });

    console.log(`[Database] MongoDB Connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Failed to connect to MongoDB: ${error.message}`);
    console.warn(`[Database Notice] Please verify that your MongoDB service is running at '${env.MONGO_URI}'`);
    // Return null so the server process can continue to serve health-check and notify of DB state
    return null;
  }
};

// Connection event listeners
mongoose.connection.on('connected', () => {
  console.log('[Database Event] Mongoose connected to DB cluster.');
});

mongoose.connection.on('error', (err) => {
  console.error(`[Database Event] Mongoose connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.warn('[Database Event] Mongoose disconnected from DB.');
});

export default connectDB;
