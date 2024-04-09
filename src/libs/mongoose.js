import mongoose from "mongoose";

export async function connectDB(){
    await mongoose.connect("mongodb+srv://rodrigoquinteros:roklee2611@cluster0.sr17qvd.mongodb.net/preguntas-app");
}

