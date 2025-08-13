import { PopUp } from "../components/PopUp"
import { useProducts } from "../context/ProductContext"
import { useSearch } from "../context/SearchContext"

const Dashboard = () => {
  const { products, delProducts, openPopUp, openToEdit } = useProducts()
  const { search } = useSearch()

  const filteredProducts = products.filter(product => {
    const term = search.toLowerCase();
    const results = product.title.toLowerCase().includes(term)
    return results
  });

  return (
    <>
      <section>
        <button onClick={() => openPopUp()}>Crear Producto Nuevo</button>
        <PopUp />
      </section>
      <section>
        {filteredProducts.length > 0 ?
          (filteredProducts.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
              <button onClick={() => openToEdit(product)}>Actualizar</button>
              <button onClick={() => delProducts(product.id)}>Borrar</button>
            </div>
          </div>))
          :
          (products.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
              <button onClick={() => openToEdit(product)}>Actualizar</button>
              <button onClick={() => delProducts(product.id)}>Borrar</button>
            </div>
          </div>))
        }
      </section>
    </>
  )
}

export { Dashboard }