import { connectDB } from "@/libs/mongoose";
import quiz from "@/models/quiz";

import Link from "next/link"
import CardQuiz from "@/components/CardQuiz";
import ModalExplicacion from "@/components/ModalExplicacion";

export const dynamic = "force-dinamyc";

async function LoadQuiz(){
    await connectDB();
    const res = await quiz.find();
    const resDos = await JSON.parse(JSON.stringify(res));
    return resDos;
}

export default async function StartGame(){

    const data = await LoadQuiz();

    return(
        <div className="flex flex-col h-screen justify-center items-center">

            <CardQuiz dataDb={data}/>    
            <br></br>
            <Link className="btnVolver" href="/">Volver al inicio</Link>
            <ModalExplicacion pageJson="1"/>
        </div>
    )
}
