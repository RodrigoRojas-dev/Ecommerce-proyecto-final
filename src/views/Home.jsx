import { useAuth } from "../context/AuthContext"
import { useProducts } from "../context/ProductContext";
import { useSearch } from "../context/SearchContext"

const Home = () => {
  const { user } = useAuth()
  const { products } = useProducts()
  const { search } = useSearch()

  const filteredProducts = products.filter(product => {
    const term = search.toLowerCase();
    const results = product.title.toLowerCase().includes(term)
    return results
  });

  return (
    <>
      <section>
        <div className="text-center">
          <h1><span className="text-amber-600">Atenas</span> Collection</h1>
          <h2 className="text-gray-400">Donde el estilo es atemporal.</h2>
          <p className="text-gray-400">Una curada selección de moda, joyería y tecnología que celebra la belleza del diseño clásico y moderno.</p>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h2>Nuestros Productos</h2>
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
                  {
                    user && <button className="btn-buy">Añadir al carrito</button>
                  }
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
                  {
                    user && <button className="btn-buy">Añadir al carrito</button>
                  }
                </div>
              </div>))
          }
        </div>
      </section>
    </>
  )
}

export { Home }