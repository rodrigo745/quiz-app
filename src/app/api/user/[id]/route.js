import user from "@/models/user";
import { connectDB } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export const dynamic = "force-dinamyc";


export async function DELETE(res, {params}){
    try {
        const result = await user.deleteOne({_id: params.id});
        return NextResponse.json(`Se eliminó correctamente el elemento de ID: ${params.id}`);
     } catch (error) {
     }
}
export async function GET(){
    await connectDB();
    const res = await user.find();
    const data = JSON.parse(JSON.stringify(res));
    return data;
}
export async function POST(request){
    await connectDB()

    const data = await request.json()
    const res = await user.create(data);
    console.log(res);
    return NextResponse.json(res);
}
