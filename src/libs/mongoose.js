import mongoose from "mongoose";

export async function connectDB(){
    await mongoose.connect(process.env.ENLACE_DATABASE);
}

