export default async function ShowIdRecord(props){

    const {params} = props;
    const datos = await props.datos;
    const url = `${process.env.ENLACE_URL}/api/user`;

    if(datos.length > 15){
        for(let i = 15; i < datos.length; i++){
            const res = await fetch(`${url}/${datos[i]._id}`,{
                method: "DELETE"
            });
            console.log(res)
        }
    }    
    return(
        <div></div>
    )
}