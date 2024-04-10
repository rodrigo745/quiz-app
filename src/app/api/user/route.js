import { connectDB } from "@/libs/mongoose";
import user from "@/models/user";
import { NextResponse } from "next/server";

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

