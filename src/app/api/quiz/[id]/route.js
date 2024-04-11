
import quiz from "@/models/quiz";
import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";

export const dynamic = "force-dinamyc";

export async function POST(request){
    await connectDB();

    const data = await request.json();
    const pregunta = await quiz.create(data);

    console.log(pregunta);
    return NextResponse.json(pregunta);
}

export async function DELETE(res, { params }) {
    try {
       const result = await quiz.deleteOne({_id: params.id});
       return NextResponse.json(`Se eliminó correctamente el elemento de ID: ${params.id}`);
    } catch (error) {
    }
}

export async function GET(){
    await connectDB();
    const res = await quiz.find();
    const data = JSON.parse(JSON.stringify(res));
    return data;
}