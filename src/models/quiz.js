import mongoose, { Schema } from "mongoose";

const esquema2 = new Schema({
    pregunta: String,
    opcionUno: String,
    opcionDos: String,
    opcionTres: String,
    correcta: Number
})

export default mongoose.models.quizzes || mongoose.model("quizzes", esquema2);