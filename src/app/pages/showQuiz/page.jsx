import { GET } from "@/app/api/quiz/[id]/route";
import Link from "next/link";
import DeleteCard from "@/components/DeleteCard";
import ModalExplicacion from "@/components/ModalExplicacion";

export const dynamic = "force-dinamyc";

export default async function ShowQuiz(){
    
    const data = await GET();

    return(
        <div className="flex flex-col mt-20 mb-20 justify-center align-middle">
            <h2 className="text-center text-2xl">Todas las preguntas</h2>
            <div className="flex justify-center content-center">
                <br />
                <div className="grid container md:grid-cols-2 xl:grid-cols-3 place-content-center gap-4 mt-5 px-5 ">
                {   
                    await data.map(e=> 
                        (
                            <div key={e._id} className={containerStyle}>
                                <div>
                                    <h5 className={h5Style}>{e.pregunta}</h5>
                                    <p className={pStyle}>1 )_ {e.opcionUno}</p>
                                    <p className={pStyle}>2 )_ {e.opcionDos}</p>
                                    <p className={pStyle}>3 )_ {e.opcionTres}</p>
                                </div>
                                <div className={containerEndStyle}>
                                    <p className={pistaStyle}>Correcta: {e.correcta}</p>
                                    <DeleteCard  llave={e._id}/> 
                                </div>
                            </div>
                    ))
                }
                </div>
            </div>
            <Link className="btnVolver"  href="/">Volver al inicio</Link>
            <ModalExplicacion pageJson="3"/>
        </div>
    )
}

// Estilos...
const containerStyle = "flex flex-col justify-between max-w-md p-4 rounded-lg shadow cardShow";
const h5Style = "mb-2 text-xl font-bold tracking-tight";
const pStyle = "font-normal mt-2";
const containerEndStyle = "flex justify-between mt-4";
const pistaStyle = "bg-green-500 p-1 px-3 rounded-md text-white";