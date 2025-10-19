import mongoose from "mongoose";

const connectDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mern")
    console.log("mongoDB connected successfully")
}


export default connectDB;
