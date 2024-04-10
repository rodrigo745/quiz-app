import mongoose from "mongoose";

let mongoClient; 

export async function connectDB(){
    try{
        if(mongoClient){
            return { mongoClient };
        }
        mongoClient = await mongoose.connect(process.env.MONGODB_URI);
        console.log("conectado...");
        return { mongoClient };
    }catch(e){
        console.log(e);
    }
}