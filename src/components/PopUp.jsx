import { useState } from "react"

const PopUp = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(Number())
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")

  return (
    <section>
      <div>
        <h2>Crear Nuevo Producto</h2>
        <div>
          <img src={} alt={`Imagen de ${}`} />
          <form>
            <div>
              <label>Nombre del Producto</label>
              <input type="text" />
            </div>
            <div>
              <label>Precio</label>
              <input type="number" />
            </div>
            <div>
              <label>Descripción</label>
              <textarea></textarea>
            </div>
            <div>
              <label>Categoria</label>
              <input type="text" />
            </div>
            <div>
              <label>Imagen</label>
              <input type="url" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}