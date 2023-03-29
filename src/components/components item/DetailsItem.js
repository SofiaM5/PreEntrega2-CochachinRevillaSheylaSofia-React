import Description from "./Description"

UseEffect(() => {
    FetchSimulation(productos.filter(flt => flt.id == idItem), 2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
}, [idItem])

return(
    <div className="detailsItem">
        {
            datos.map(items => (
                <>
                    <div className="containerLeft">
                        <Image
                            imagen={datos[0].imagePtoduct.firstImage}
                        />
                    </div>

                    <div className="containerRigth">
                        <Description
                            title={datos[0].title}
                            parrafo={datos[0].description}
                            cantidad={datos[0].stock}
                            precio={datos[0].price}
                        
                        />

                        <div className="buttons">
                            <AddCantCart
                                cant={5}
                            />

                            <ButtonDetalles
                                txt="Agregar al carrito"
                            />
                        </div>
                    </div>
                
                </>
            ))
        }
    </div>
)