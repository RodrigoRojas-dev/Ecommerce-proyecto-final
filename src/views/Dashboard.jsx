import { useProducts } from "../context/ProductContext"

const Dashboard = () => {
  const { products } = useProducts()
  return (
    <>
      <section>
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
            <label>URL de la Imagen</label>
            <input type="url" />
          </div>
          <button>Añadir Producto</button>
        </form>
      </section>
      <section>
        {
          products.map((product) => <div key={product.id}>
            <img src={product.image} alt={`Imagen de ${product.title}`} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
              <button>Actualizar</button>
              <button>Borrar</button>
            </div>
          </div>)
        }
      </section>
    </>
  )
}

export { Dashboard }