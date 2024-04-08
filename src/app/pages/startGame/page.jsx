import Link from "next/link"
import CardQuiz from "@/components/CardQuiz";
import { GET } from "@/app/api/quiz/route";
import ModalExplicacion from "@/components/ModalExplicacion";

export default async function StartGame(){

    const data = await GET();

    return(
        <div className="flex flex-col h-screen justify-center items-center">

            <CardQuiz dataDb={data}/>    
            <br></br>
            <Link className="btnVolver" href="/">Volver al inicio</Link>
            <ModalExplicacion pageJson="1"/>
        </div>
    )
}
