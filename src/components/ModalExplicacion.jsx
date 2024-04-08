"use client";
import { useState } from "react";
import explicacion from "@/app/explicacion.json"

export default function ModalExplicacion(props){

    const pageJson = parseInt(props.pageJson);
    const [ mostrar, setMostrar ] = useState(false);
    
    const quitarModal = (e)=>{
        e.preventDefault();
        mostrar ? setMostrar(false) : setMostrar(true);
        
        // datos del modal
        console.log(explicacion[pageJson].titulo)

        switch(pageJson){}
        /* 
        - pasar un numero desde cada pagina hacia aqui como props
        - filtrar el numero y mostrar lo correspondiente a el
        */
    }

    return(
        <>
            {
                mostrar ?
                    <div className="modalBlur">
                        <div className="modalExplicacion flex flex-col w-3/4 md:w-2/4 lg:w-2/4 2xl:w-2/5">
                            <div className="flex justify-center">
                                <h2 className="text-center mt-4 mr-10 mb-3 md:text-2xl text-lg">{explicacion[pageJson].titulo}</h2>
                                <button className="absolute right-3 bg-red-400 rounded-full ml-20 mt-3 h-8 px-4 font-bold " onClick={quitarModal}>X</button>
                            </div>
                            <hr className="border-cyan-400"/>
                            <div className="flex flex-col p-5 mb-4">
                                <label className="mb-3">{explicacion[pageJson].descripcion}</label>
                                {
                                    explicacion[pageJson].utilidades.map((e,index)=>( 
                                        <label className="mt-1" key={index}>{e}</label>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                :
                <button onClick={quitarModal} className="btnMostrarModal">?</button>
            }
        </>

    )
}