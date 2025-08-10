import { useState } from "react"
import { useProducts } from "../context/ProductContext"

const PopUp = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(Number())
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")

  const { createProduct } = useProducts()

  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct(title, price, description, category, image)
  }

  return (
    <section>
      <div>
        <h2>Crear Nuevo Producto</h2>
        <div>
          <img src={image} alt={`Imagen de ${title}`} />
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre del Producto</label>
              <input type="text"
                onChange={(e) => { setTitle(e.target.value) }}
                value={title}
              />
            </div>
            <div>
              <label>Precio</label>
              <input type="number"
                onChange={(e) => { setPrice(Number(e.target.value)) }}
                value={price}
              />
            </div>
            <div>
              <label>Descripción</label>
              <textarea
                onChange={(e) => { setDescription(e.target.value) }}
                value={description}
              />
            </div>
            <div>
              <label>Categoria</label>
              <input type="text"
                onChange={(e) => { setCategory(e.target.value) }}
                value={category}
              />
            </div>
            <div>
              <label>Imagen</label>
              <input type="url"
                onChange={(e) => { setImage(e.target.value) }}
                value={image}
              />
            </div>
            <button>Crear Producto</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export { PopUp }