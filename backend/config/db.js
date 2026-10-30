import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.includes('<username>') || uri.includes('YOUR_MONGODB_URI')) {
    console.warn('\n⚠️ [MongoDB] Warning: MONGO_URI is not configured in backend/.env.');
    console.warn('ℹ️ [MongoDB] The API will run in FALLBACK DEMO MODE with built-in data.');
    console.warn('💡 [MongoDB] To connect to MongoDB Atlas, add your Atlas connection string to backend/.env\n');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`\n✅ [MongoDB] Connected successfully to host: ${conn.connection.host}\n`);
    return true;
  } catch (error) {
    console.error(`\n❌ [MongoDB] Connection error: ${error.message}`);
    console.warn('ℹ️ [MongoDB] Falling back to offline demo data mode.\n');
    isConnected = false;
    return false;
  }
};

export const getDBStatus = () => isConnected;
