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
        {
          filteredProducts.length === 0 && <p className="text-xl text-red-500">No se encontraron resultados</p>
        }
        <div className="grid-products">
          {
            filteredProducts.length > 0 ?
              (filteredProducts.map((product) => <div key={product.id} className="grid-cards">
                <div className="bg-img">
                  <img src={product.image} alt={`Imagen de ${product.title}`} className="img-cards" />
                </div>
                <div className="info-card">
                  <div>
                    <h3 className="name">{product.title}</h3>
                    <p className="precio">${product.price}</p>
                  </div>
                  <div>
                    <button onClick={() => openToEdit(product)}>Actualizar</button>
                    <button onClick={() => delProducts(product.id)}>Borrar</button>
                  </div>
                </div>
              </div>))
              :
              (products.map((product) => <div key={product.id} className="grid-cards">
                <div className="bg-img">
                  <img src={product.image} alt={`Imagen de ${product.title}`} className="img-cards" />
                </div>
                <div className="info-card">
                  <div>
                    <h3 className="name">as{product.title}</h3>
                    <p className="precio">${product.price}</p>
                  </div>
                  <div>
                    <button onClick={() => openToEdit(product)}>Actualizar</button>
                    <button onClick={() => delProducts(product.id)}>Borrar</button>
                  </div>
                </div>
              </div>))
          }
        </div>
      </section>
    </>
  )
}

export { Dashboard }