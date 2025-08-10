import { PopUp } from "../components/PopUp"
import { useProducts } from "../context/ProductContext"

const Dashboard = () => {
  const { products, delProducts, openPopUp, openToEdit } = useProducts()


  return (
    <>
      <section>
        <button onClick={() => openPopUp()}>Crear Producto Nuevo</button>
        <PopUp />
      </section>
      <section>
        {
          products.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
              <button onClick={() => openToEdit(product)}>Actualizar</button>
              <button onClick={() => delProducts(product.id)}>Borrar</button>
            </div>
          </div>)
        }
      </section>
    </>
  )
}

export { Dashboard }