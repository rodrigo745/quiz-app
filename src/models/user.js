import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    nombre: String,
    puntos: Number,
    cantidad: Number,
    fallas: Number
});

export default mongoose.models.users || mongoose.model("users", schema);