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
  const [errorMessage, setErrorMessage] = useState(null)

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const validateProduct = (title, price, description, category, image) => {
    if (!title) {
      return "El título es requerido.";
    }
    if (!price || isNaN(price)) {
      return "El precio es un campo numérico y es requerido.";
    }
    if (!description) {
      return "La descripción es requerida.";
    }
    if (!category) {
      return "La categoría es requerida.";
    }
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!image || !urlRegex.test(image)) {
      return "La URL de la imagen no es válida o es requerida.";
    }
    return null;
  };



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
    const error = validateProduct(title, price, description, category, image);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage(null);

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
    const error = validateProduct(title, price, description, category, image);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage(null);

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
    setErrorMessage(null)
    return setIsPopupOpen(true)
  }

  const closePopUp = () => {
    setErrorMessage(null)
    return setIsPopupOpen(false)
  }

  return (
    <ProductContext.Provider value={{ products, isPopupOpen, productToEdit, getProducts, delProducts, createProduct, openPopUp, openToEdit, closePopUp, updateProduct, errorMessage }}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProducts = () => useContext(ProductContext)

export { ProductProvider, useProducts }