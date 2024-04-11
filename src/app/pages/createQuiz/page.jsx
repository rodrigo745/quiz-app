"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ModalExplicacion from "@/components/ModalExplicacion";

export const dynamic = "force-dinamyc";

export default function CreateQuiz(){
    let datos = {};
    const [ pregunta, setPregunta ] = useState("");
    const [ opcionUno, setOpcionUno ] = useState("");
    const [ opcionDos, setOpcionDos ] = useState("");
    const [ opcionTres, setOpcionTres ] = useState("");
    const [ correcta, setCorrecta ] = useState("");
    const [ error, setError ] = useState(<div></div>);
    const [ errorBool, setErrorBool ] = useState(false);
    const [ createQuiz, setCreateQuiz ] = useState(<div></div>);
    const router = useRouter();

    const envioDatos = async(e)=>{
        e.preventDefault();
        datos = {pregunta: pregunta,
            opcionUno: opcionUno,
            opcionDos: opcionDos,
            opcionTres: opcionTres,
            correcta: correcta
        }
        if(errorBool){
            await fetch("../api/quiz/[id]/", {
                method: "POST",
                body: JSON.stringify(datos),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPregunta("");
            setOpcionUno("");
            setOpcionDos("");
            setOpcionTres("");
            setCorrecta("");
            setCreateQuiz(envioExitoso);
            await new Promise((resolve)=> setTimeout(resolve, 2000));
            setCreateQuiz(<div></div>)
            setErrorBool(false);
            router.refresh();
        }
    }

    const cambioCero = (e)=>{setPregunta(e.target.value)}
    const cambioUno = (e)=>{setOpcionUno(e.target.value)}
    const cambioDos = (e)=>{setOpcionDos(e.target.value)}
    const cambioTres = (e)=>{setOpcionTres(e.target.value)}
    const cambioCorrecta = (e)=>{
        if((e.target.value != 1 && e.target.value != 2 && e.target.value != 3) && 
            e.target.value != "" || e.target.value == null || e.target.value.length >= 2 ){
            setError(errorStyle);
            setErrorBool(false);
        } else {
            setCorrecta(e.target.value);
            setErrorBool(true);
            setError(<div></div>);
        }
    }

    return(
        <div>
            <form onSubmit={envioDatos} className="flex flex-column justify-center items-center h-screen">
                {/* Formulario */}
                <div  className="flex flex-col justify-center items-center ">
                    <h1 className="text-center text-2xl">Creación de preguntas</h1>
                    <div>
                        <label className={labelStyle}>Pregunta</label>
                        <input value={pregunta} onChange={cambioCero} type="text" placeholder="Ej: ¿Cuanto es 2 + 2?" className={inputStyle}/>
                    </div>
                    <div>
                        <label className={labelStyle}>Respuesta uno</label>
                        <input value={opcionUno} onChange={cambioUno} type="text" placeholder="Ej: 6" className={inputStyle}/>
                    </div>
                    <div>
                        <label className={labelStyle}>Respuesta dos</label>
                        <input value={opcionDos} onChange={cambioDos} type="text" placeholder="Ej: 2" className={inputStyle}/>
                    </div>
                    <div>
                        <label className={labelStyle}>Respuesta tres</label>
                        <input value={opcionTres} onChange={cambioTres} type="text" placeholder="Ej: 4" className={inputStyle}/>
                    </div>
                    <div>
                        <label className={labelStyle}>Respuesta correcta</label>
                        <input value={correcta} onChange={cambioCorrecta} type="text" placeholder="Ej: 3" className={inputStyle}/>
                        {error}
                    </div>
                    {createQuiz}
                    <button className="p-2 px-6 mt-5 rounded-md btnEnviar">Crear</button>
                </div>
            </form>
            <Link className="btnVolver" href="/">Volver al inicio</Link>    
            <ModalExplicacion pageJson="2"/>

        </div>
    )
}
// estilos y simplificacion de codigo
const inputStyle = "p-4  rounded-md placeholder:text-sm input";
const labelStyle = "text-sm mt-5 block text-left";
const errorStyle = <div className="text-red-400 mt-2 w-80">La respuesta correcta debe ser un número del 1 al 3</div>
const envioExitoso = <div className="mt-4 bg-green-400 text-black p-2 px-4 rounded-md">Creado con exito</div>