const Dashboard = () => {
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
    </>
  )
}

export { Dashboard }