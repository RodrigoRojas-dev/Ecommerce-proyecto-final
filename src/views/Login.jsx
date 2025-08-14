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
      <section className="log-conteiner">
        <div className="login-card">
          <div className="flex flex-col p-4 gap-2">
            <h1>Acceder</h1>
            <h2>Inicia Sesión para continuar.</h2>
          </div>
          <div className="cred-conteiner">
            <h3>Credenciales de prueba:</h3>
            <p className="flex gap-2 justify-center">
              <strong>Usuario:</strong>
              <span>johnd</span>
            </p>
            <p className="flex gap-2 justify-center">
              <strong>Contraseña:</strong>
              <span>m38rmF$</span>
            </p>
          </div>
          <div className="div-inputs">
            {
              errorMessage && <div>
                <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
              </div>
            }
            <form onSubmit={handleSubmit} className="card-form gap-3">
              <div className="flex flex-col gap-2">
                <label className="text-left">Nombre de Usuario</label>
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} value={username} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-left">Contraseña</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
              </div>
              <div className="btn-conteiner-col">
                <button className="btn btn-updt">Acceder</button>
                <p>¿No tienes una cuenta? <Link to="/register" className="hover:text-amber-600">Registrate</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export { Login }