import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { loginUser, errorMessage, user } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isLogin = await loginUser(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <>
      <section>
        <div>
          <h1>Acceder</h1>
          <h2>Inicia Sesión para continuar.</h2>
        </div>
        <div>
          <h3>Credenciales de prueba:</h3>
          <p>
            <strong>Usuario:</strong>
            johnd
          </p>
          <p>
            <strong>Contraseña:</strong>
            m38rmF$
          </p>
        </div>
        {
          errorMessage && <div>
            <p>{errorMessage}</p>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario</label>
            <input type="text" onChange={(e) => { setUsername(e.target.value) }} value={username} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
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