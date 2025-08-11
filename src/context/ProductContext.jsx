import { createContext, useContext, useState, useEffect } from "react"

const generarId = () => {
  const uuidNumerico = crypto.randomUUID().replace(/[^0-9]/g, "");
  
  const idCorto = uuidNumerico.slice(0, 16);
  
  return idCorto;
};

const ProductContext = createContext()

const ProductProvider = (props) => {
  const [products, setProducts] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [productToEdit, setProductToEdit] = useState(null)
  const [nuevoID, setNuevoId] = useState(null)

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const delProducts = (id) => {
    const response = fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    setProducts(products.filter(product => product.id !== id))
  }

  const createProduct = async (title, price, description, category, image) => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: parseInt(nuevoID),
        title,
        price,
        description,
        category,
        image
      })
    })

    const newProduct = {
      id: parseInt(nuevoID),
      title,
      price,
      description,
      category,
      image
    }

    if (response.ok) {
      const copyProducts = products.slice()
      copyProducts.push(newProduct)
      console.log(copyProducts);
      setProducts(copyProducts)
    }

    console.log(response, "response del createProduct");

  }

  const openToEdit = (product) => {
    setProductToEdit(product)
    setIsPopupOpen(true)
  }

  const updateProduct = async (id, title, price, description, category, image) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        title,
        price,
        description,
        category,
        image
      })
    })

    const updatedProduct = await response.json();

    setProducts(prevProducts => prevProducts.map(product => product.id === id ? updatedProduct : product))
  }

  const openPopUp = () => {
    setNuevoId(generarId())
    setProductToEdit(null)
    return setIsPopupOpen(true)
  }

  const closePopUp = () => {
    return setIsPopupOpen(false)
  }

  return (
    <ProductContext.Provider value={{ products, isPopupOpen, productToEdit, getProducts, delProducts, createProduct, openPopUp, openToEdit, closePopUp, updateProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }