import mongoose, { Schema } from "mongoose";

const esquema2 = new Schema({
    pregunta: String,
    opcionUno: String,
    opcionDos: String,
    opcionTres: String,
    correcta: Number
})

export default mongoose.models.Quiz2 || mongoose.model("Quiz2", esquema2);


