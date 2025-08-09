import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useProducts } from "../context/ProductContext";


const Home = () => {
  const { user } = useAuth()
  const { products } = useProducts()

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