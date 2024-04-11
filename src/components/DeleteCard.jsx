"use client";
import { useRouter } from "next/navigation";

export default function DeleteCard(props){
    const router = useRouter();
    let datos = props.llave;
    
    const borrar = async(e)=>{
        e.preventDefault();
        const res = await fetch(`/api/quiz/${datos}`, {
              method: "DELETE"
        });
        router.refresh();
    }
    return(
        <div>
            <button onClick={borrar} className={eliminarStyle}>Eliminar</button>
        </div>
    )
}

const eliminarStyle = "text-white bg-red-500 p-1 px-3 rounded-md"