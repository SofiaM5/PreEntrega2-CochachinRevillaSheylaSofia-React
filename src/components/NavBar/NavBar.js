import Brand from "./Brand";
import ItemList from "./ItemList";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>

      <div className="containerBrand">
        <Brand/>
      </div>

      <div className="containerItemList">
        <ItemList
          itemUno = "Inicio"
          itemDos = "Nosotros"
          itemTres = "Servicios"
          itemCuatro = "Contactos"
        />
      </div>

      <div className="containerCart">
        <CartWidget/>
      
      </div>
    </header>
  )
}

export default NavBar;