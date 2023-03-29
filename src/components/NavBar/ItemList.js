import {Link} from "react-router-dom"
const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to ="category/Polos">
                    {props.itemUno}
                </Link>
            </li>

            <li>
                <Link to ="category/Pantalones">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to ="category/Casacas">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to ="category/Gorras">
                    {props.itemCuatro}
                </Link>
            </li>
            
        </ul>
    )
}

export default ItemListContainer;