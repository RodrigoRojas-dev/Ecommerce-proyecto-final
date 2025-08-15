import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <section>
        <h1>¡Pagina no encontrada!</h1>
        <h2>Lo sentimos, la pagina que estas buscando no existe o se movió</h2>
        <p>Vuelve a la <Link to="/Ecommerce-proyecto-final">página de inicio</Link></p>
      </section>
    </>
  )
}

export { NotFound }