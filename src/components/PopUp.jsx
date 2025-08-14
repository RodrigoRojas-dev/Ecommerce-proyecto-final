import { useEffect, useState } from "react"
import { useProducts } from "../context/ProductContext"

const PopUp = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(Number())
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState(null)

  const { isPopupOpen, createProduct, closePopUp, productToEdit, updateProduct, errorMessage } = useProducts()

  useEffect(() => {
    if (productToEdit) {
      setTitle(productToEdit.title)
      setPrice(Number(productToEdit.price))
      setDescription(productToEdit.description)
      setCategory(productToEdit.category)
      setImage(productToEdit.image)
    } else {
      setTitle("")
      setPrice(Number())
      setDescription("")
      setCategory("")
      setImage(null)
    }
  }, [productToEdit]);

  useEffect(() => {
    if (isPopupOpen && errorMessage === null) {
      setTitle("");
      setPrice(Number());
      setDescription("");
      setCategory("");
      setImage(null);
      closePopUp();
    }
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (productToEdit) {
      await updateProduct(productToEdit.id, title, price, description, category, image)
      closePopUp()
    } else {
      await createProduct(title, price, description, category, image)
      closePopUp()
    }
  }

  const handleCancel = () => {
    setTitle("")
    setPrice(Number())
    setDescription("")
    setCategory("")
    setImage(null)
    closePopUp()
  }

  if (!isPopupOpen) {
    return null
  }

  return (
    <section className="popup-container">
      <div className="overlay"></div>
      <div className="bg-card">
        <div className="p-4">
          <h2 className="text-center">
            {
              productToEdit ? "Actualizar Producto" : "Crear Producto"
            }
          </h2>
          {
            errorMessage && <div>
              <p>{errorMessage}</p>
            </div>
          }
          <div>
            <form onSubmit={handleSubmit} className="card-form">
              <div className="inputs-form">
                <label>Nombre del Producto</label>
                <input type="text"
                  onChange={(e) => { setTitle(e.target.value) }}
                  value={title}
                />
              </div>
              <div className="inputs-form">
                <label>Precio</label>
                <input type="number"
                  onChange={(e) => { setPrice(Number(e.target.value)) }}
                  value={price}
                />
              </div>
              <div className="inputs-form">
                <label>Descripción</label>
                <textarea
                  onChange={(e) => { setDescription(e.target.value) }}
                  value={description}
                />
              </div>
              <div className="inputs-form">
                <label>Categoria</label>
                <input type="text"
                  onChange={(e) => { setCategory(e.target.value) }}
                  value={category}
                />
              </div>
              <div className="inputs-form">
                <label>Imagen</label>
                <input type="url"
                  onChange={(e) => { setImage(e.target.value) }}
                  value={image ?? ""}
                />
              </div>
              <div className="btn-conteiner">
                <button type="submit" className="btn btn-updt">
                  {
                    productToEdit ? "Actualizar" : "Crear"
                  }
                </button>
                <button type="button" onClick={handleCancel} className="btn btn-del">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PopUp }