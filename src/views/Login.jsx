import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  console.log(username, password);


  return (
    <>
      <section>
        <h1>Acceder</h1>
        <h2>Inicia Sesión para continuar.</h2>
        <form>
          <div>
            <label>Nombre de Usuario</label>
            <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div>
            <button>Acceder</button>
            <p>¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
          </div>
        </form>
      </section>
    </>
  )
}

export { Login }