import { useEffect, useState } from "react";



const Home = () => {
  const [products, setProducts] = useState([])

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const mensClothing = products.filter((product) => product.category === "men's clothing")
  const electronics = products.filter((product) => product.category === "electronics")
  const jewelery = products.filter((product) => product.category === "jewelery")
  const womensClothing = products.filter((product) => product.category === "women's clothing")

  return (
    <>
      <section>
        <div>
          <h1>Elegancia en <span>cada detalle</span>.</h1>
          <p>Descubre una colección curada de moda, joyeria y tecnologia para quienes definen su propio estilo.</p>
        </div>
        <div>
          <button>Comprar Ropa</button>
          <button>Comprar Electrónica</button>
        </div>
      </section>
      {/* Sección de Joyeria */}
      <section>
        <h2>Artículos de Joyeria</h2>
        {
          jewelery.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Añadir al carrito</button>
          </div>)
        }
      </section>
      {/* Sección de Ropa de Mujer */}
      <section>
        <h2>Ropa de Mujer</h2>
        {
          womensClothing.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Añadir al carrito</button>
          </div>)
        }
      </section>
      {/* Sección de Ropa de Hombre */}
      <section>
        <h2>Ropa de Hombre</h2>
        {
          mensClothing.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Añadir al carrito</button>
          </div>)
        }
      </section>
      {/* Sección de Electronica */}
      <section>
        <h2>Artículos de Electrónica</h2>
        {
          electronics.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Añadir al carrito</button>
          </div>)
        }
      </section>
    </>
  )
}

export { Home }