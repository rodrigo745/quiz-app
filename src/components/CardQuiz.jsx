"use client"
import { useEffect, useState } from "react";
import SaveRecord from "./SaveRecord";

export default function CardQuiz(props){
    const respaldo = props.dataDb.slice(); // creo una copia del array original, para que este no sea afectado

    const [ data, setData ] = useState(respaldo);
    let indRandom = Math.floor(Math.random() * data.length);
    const [ mostrar, setMostrar ] = useState(true);
    const [ respCorrecta, setRespCorrecta ] = useState("cardResp");
    const [ mostrarVariante, setMostrarVariante ] = useState(false);
    const [ cont, setCont ] = useState(0);
    const [ contFail, setContFail ] = useState(0);
    const [ usadas, setUsadas ] = useState([])

    // cambiar de preguntas, eliminar preguntas ya mostradas, contar puntos y fallos...
    const contar = async (e)=>{
        e.preventDefault()
        
        if(data.length <= 1){    
            if(data[indRandom].correcta == e.target.id){
                e.target.className = "cardResp correcta"
                await new Promise((resolve)=> setTimeout(resolve, 500));
                e.target.className = "cardResp"
            } else{
                e.target.className = "cardResp incorrecta"
                await new Promise((resolve)=> setTimeout(resolve, 500));
                e.target.className = "cardResp"
            }
            setData(respaldo);
            setMostrar(false);
        }
        if(data.length >= 1){
            if(data[indRandom].correcta == e.target.id){
                e.target.className = "cardResp correcta";
                await new Promise((resolve)=> setTimeout(resolve, 500));
                setCont(cont+1);
                usadas.push(indRandom);
                setUsadas(usadas);
                e.target.className = "cardResp";
                
            } else{
                e.target.className = "cardResp incorrecta"
                await new Promise((resolve)=> setTimeout(resolve, 500));
                e : setContFail(contFail+1)
                usadas.push(indRandom);
                setUsadas(usadas);
                e.target.className = "cardResp"
            }
    
            let idBuscado = data[indRandom]._id; // Obtener el _id que deseas buscar
            let indice = -1;
            
            // Recorrer el array para encontrar el índice del objeto con el _id buscado
            for (let i = 0; i < data.length; i++) {
                if (data[i]._id === idBuscado) {
                    indice = i;
                    break; // Detener el bucle una vez que se haya encontrado el índice
                }
            }
            data.splice(indice, 1); // se eimina el objeto ya usado
            indRandom = Math.floor(Math.random() * (data.length - usadas.length)); // se vuelve a calcular con el nuevo array
        }
    }
    const gameAgain = (e)=>{
        e.preventDefault;
        setData(respaldo);
        setMostrar(true);
        setCont(0);
        setContFail(0);
        setUsadas([]);
    }

    useEffect(()=>{ // controlo que solo se renderice una vez 
        if(data.length == undefined || data.length == 0 || data.empty == true){
            setMostrarVariante(false);
        } else{
            setMostrarVariante(true);
        }
    }, [data]);

    return(
        <div>
            {
                mostrarVariante ?
                <div className="flex flex-col justify-center items-center mt-10 ">
                {
                    mostrar ? 
                    <div>
                        <div className="flex flex-col mb-5">
                            <h1 className="cardPregunta mb-2">{data[indRandom].pregunta} </h1>
                            <button id="1" onClick={contar} className={respCorrecta}>{data[indRandom].opcionUno} </button>
                            <button id="2" onClick={contar} className={respCorrecta}>{data[indRandom].opcionDos}</button> 
                            <button id="3" onClick={contar} className={respCorrecta}>{data[indRandom].opcionTres}</button>
                            <div className="flex justify-between mt-10 mx-5">
                                <h2>Puntos: {cont}</h2>
                                <h2>Fallas: {contFail}</h2>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="mx-5"> {usadas.length+1} / {respaldo.length} </h3>
                        </div>
                    </div>
                    : 
                    <div className="text-center">
                        <SaveRecord cantidad={respaldo.length} correctas={cont} incorrectas={contFail}/>
                        <button className="border rounded-md border-cyan-400 p-2 px-4 mt-4 hover:bg-cyan-500 hover:text-black" onClick={gameAgain}>Volver a jugar</button>
                    </div>   
                }
                    
            </div>
                : 
                <div>Sin datoss</div>
            }
        </div>
    )
}