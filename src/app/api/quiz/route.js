import { connectDB } from "@/libs/mongoose";
import quiz from "@/models/quiz";
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDB();

    const data = await request.json();
    const pregunta = await quiz.create(data);

    console.log(pregunta);
    return NextResponse.json(pregunta);
}
export async function GET(){
    await connectDB();
    const res = await user.find();
    const data = JSON.parse(JSON.stringify(res));
    return data;
}

// export async function DELETE(res, { params }) {
//     await connectDB();
//     console.log(params);
//     try {
//       //const result = await quiz.deleteMany({});
  
//       // Envía una respuesta con el resultado de la operación
//     } catch (error) {
//       // Maneja los errores
//     }
//     return NextResponse.json("");
// }

