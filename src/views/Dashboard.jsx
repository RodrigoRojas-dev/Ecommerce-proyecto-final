import { useProducts } from "../context/ProductContext"

const Dashboard = () => {
  const { products, delProducts } = useProducts()
  return (
    <>
      <section>
        {
          products.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
              <button>Actualizar</button>
              <button onClick={() => delProducts(product.id)}>Borrar</button>
            </div>
          </div>)
        }
      </section>
    </>
  )
}

export { Dashboard }