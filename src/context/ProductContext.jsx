import { createContext, useContext, useState, useEffect } from "react"


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

  return (
    <ProductContext.Provider value={{ products, getProducts, delProducts }}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }