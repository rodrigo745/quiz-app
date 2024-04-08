import Link from "next/link"
import { GET } from "@/app/api/user/route";
import ShowIdRecord from "@/app/api/user/[id]/page";
import ModalExplicacion from "@/components/ModalExplicacion";

export default async function ShowRecord(){

    let datos = await GET();

    datos = datos.sort((a,b)=> b.puntos - a.puntos )

    return(
        <div className="flex flex-col items-center mb-20">
            <h2 className="mt-10 text-xl">Records de los jugadores:</h2>
            <br />
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-9 md:gap-x-24 justify-center">
                {
                    datos.slice(0, 15).map((e,index)=> 
                (
                    <div key={e._id} className="cardRecord flex flex-row">
                        <h2 className="numeroPosicion">{index+1}</h2>
                        <div className="">
                            <h1 className="letraRound">{datos[index].nombre[0].toUpperCase()}</h1>
                        </div>
                        <div className="border-l border-cyan-300 h-20"></div>
                        <div className="basis-2/3">
                            <h2>Puntos: {e.puntos}</h2>
                            <h2>Nombre: {e.nombre} </h2>
                            <h2>Cantidad de preguntas: {e.cantidad} </h2>
                        </div>
                    </div>

                ))
                }
            </div>
            <Link className="btnVolver" href="/">Volver al inicio</Link>   
            <ShowIdRecord datos={datos} /> 
            <ModalExplicacion pageJson="4" />
        </div>
    )
}