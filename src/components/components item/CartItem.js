import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = () => {
    return(
        <div className = "cardItem">
            <Image imagen={props.imagen}/>
            <Description 
                title={props.title}
                cantidad={props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>


        </div>

    )
}

export default CardItem;