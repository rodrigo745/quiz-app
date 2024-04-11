"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SaveRecord(props){
    
    const cantidad = props.cantidad;
    const correctas = props.correctas;
    const incorrectas = props.incorrectas;
    const [ modal, setModal ] = useState(false);
    const [ nombre, setNombre ] = useState("");
    const [ mensaje, setMensaje ] = useState("Esperando...");
    const [ guardar, setGuardar ] = useState(true);
    const router = useRouter();
    let datos = {};

    const mostrarModal = async(e)=>{
        e.preventDefault();
        if(modal && guardar){
            datos = {
                nombre: nombre,
                puntos: correctas,
                cantidad: cantidad,
                fallas: incorrectas
            }
            if(nombre != "" && nombre.length > 2){
                await fetch("../api/user/[id]/", {
                    method: "POST",
                    body: JSON.stringify(datos),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setMensaje("Guardado")
                setNombre("");
                router.refresh();
                await new Promise((resolve)=>{ setTimeout(resolve, 1200)});
                modal ? setModal(false) : setModal(true);
                setGuardar(false);
                setMensaje("Esperando...")
            } else {
                setMensaje("El nombre debe tener mas de dos letras")
            }
        } else {
            modal ? setModal(false) : setModal(true);
        }
    }

    const cambios = (e)=>{
        setNombre(e.target.value)
    }
    const cancelar = ()=> { modal ? setModal(false) : setModal(true); } 

    return(
        <div>
            <h2 className="text-xl">Puntuacion final: {correctas}</h2>
            <h2 className="mt-4 text-xl">Fallas: {incorrectas}</h2>

            {
                modal &&
                <form onSubmit={mostrarModal} className="modalContainer">
                    <div className="modalSave">
                        <h2 className="text-left mx-6 mt-5 mb-2">Escribe tu nombre </h2>
                        <input onChange={cambios} className="input p-2" placeholder="Ej: Rodrigo"/>
                        <h2 className="mensaje pt-2 text-gray-400"> {mensaje} </h2>
                        <div className="flex justify-evenly mt-1">
                            <button onClick={cancelar} className="border rounded-md border-cyan-400 p-2 px-4 mt-2 hover:bg-cyan-500 hover:text-black">Cancelar</button>
                            <button className="border  rounded-md border-cyan-400 p-2 px-4 mt-2 hover:bg-cyan-500 hover:text-black">Guardar</button>
                        </div>
                    </div>
                </form>
            }      
            <button onClick={mostrarModal} className="border rounded-md border-cyan-400 p-2 px-4 mt-4 hover:bg-cyan-500 hover:text-black">Guardar puntaje</button>

        </div>
    )
}