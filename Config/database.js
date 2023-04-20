import mongoose from "mongoose";
mongoose.set('strictQuery', false);
export const connectDB = async () => {
  const { connection } = await mongoose.connect('mongodb+srv://Skr_2006:Skr2002@cluster0.zpebaut.mongodb.net/startup?retryWrites=true');
  console.log(`MongoDB connected with ${connection.host}`);
};


 {/*https://startup-five-puce.vercel.app/  this is for frontend url   http://localhost:4000 */}
