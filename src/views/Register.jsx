import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <section>
        <h1>Registrarse</h1>
        <h2>Crea tu cuenta para continuar.</h2>
        <form>
          <div>
            <label>Nombre de Usuario</label>
            <input type="text" />
          </div>
          <div>
            <label>Correo Electrónico</label>
            <input type="email" />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" />
          </div>
          <div>
            <button>Registrar</button>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
          </div>
        </form>
      </section>
    </>
  )
}

export { Register }