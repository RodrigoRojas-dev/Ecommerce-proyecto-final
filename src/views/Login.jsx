import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <section>
        <h1>Acceder</h1>
        <h2>Inicia Sesión para continuar.</h2>
        <form>
          <div>
            <label>Nombre de Usuario</label>
            <input type="text" />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" />
          </div>
          <button>Acceder</button>
          <Link to="/register">Crear Cuenta</Link>
        </form>
      </section>
    </>
  )
}

export { Login }