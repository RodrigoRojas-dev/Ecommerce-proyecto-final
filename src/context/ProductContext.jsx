import { createContext, useContext, useState, useEffect } from "react"

const generarId = () => crypto.randomUUID().replace(/[^0-9]/g, "");

const ProductContext = createContext()

const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const delProducts = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const createProduct = () => {
    const response = fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: parseInt(generarId)
        title,
        price,
        description,
        category,
        image
      })
    })

    console.log(response);
    
  }

  return (
    <ProductContext.Provider value={{ products, getProducts, delProducts }}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }