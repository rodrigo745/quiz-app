
import quiz from "@/models/quiz";
import { NextResponse } from "next/server";

export async function DELETE(res, { params }) {
    try {
       const result = await quiz.deleteOne({_id: params.id});
       return NextResponse.json(`Se eliminó correctamente el elemento de ID: ${params.id}`);
    } catch (error) {
    }
}


