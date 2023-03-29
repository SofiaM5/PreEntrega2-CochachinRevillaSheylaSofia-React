import CardItem from "./CartItem"
import FetchSimulation from "../../utils/fetchSimulation"
import productos from "../../utils/products";
import { useState, useEffect } from "react";


const ContainerCardItems = () =>{
    const [ datos, setDatos] = useState([]);

    useEffect(() => {
        FetchSimulation(productos, 3000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    },[])

    return(
        <>
            {
                datos.map((products) =>(
                    <CardItem
                        key={products.id}
                        title={products.title}
                        cantidad={products.stock}
                        precio={products.price}
                    
                    />
                ))

            }
        
        </>
    )
}

export default ContainerCardItems;