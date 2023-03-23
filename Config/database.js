import mongoose from "mongoose";
mongoose.set('strictQuery', false);
export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected with ${connection.host}`);
};

 {/*https://startup-five-puce.vercel.app/  this is for frontend url   http://localhost:4000 */}