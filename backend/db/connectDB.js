import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        console.log("mongo_uri :", process.env.URI);
      const conn =  await mongoose.connect(process.env.URI);
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(error){
        console.error(error.message);
        process.exit(1);
    }
}
