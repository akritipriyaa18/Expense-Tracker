import mongoose from "mongoose"

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true, // optional in latest versions, but can include for clarity
      });
      console.log('MongoDB connected: 127.0.0.1');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit process on DB failure
    }
  };
  
  export default connectDB;
