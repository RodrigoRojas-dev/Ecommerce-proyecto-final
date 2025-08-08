import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const { loginUser } = useAuth()

  console.log(username, password);

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(username, password)
    setUsername("")
    setPassword("")
  }

  return (
    <>
      <section>
        <h1>Acceder</h1>
        <h2>Inicia Sesión para continuar.</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario</label>
            <input type="text" onChange={(e) => { setUsername(e.target.value) }} value={username} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={username} />
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