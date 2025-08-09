import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"


const Home = () => {
  const [products, setProducts] = useState([])
  const { user } = useAuth()

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  return (
    <>
      <section>
        <div>
          <h1>Elegancia en <span>cada detalle</span>.</h1>
          <p>Descubre una colección curada de moda, joyeria y tecnologia para quienes definen su propio estilo.</p>
        </div>
      </section>
      <section>
        <h2>Nuestros Productos</h2>
        {
          products.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            {
              user && <button>Añadir al carrito</button>
            }
          </div>)
        }
      </section>
    </>
  )
}

export { Home }