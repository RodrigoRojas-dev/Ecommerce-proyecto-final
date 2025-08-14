import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { registerUser } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!username) {
      setError("El nombre de usuario es obligatorio.");
      return;
    }

    if (!email) {
      setError("El correo electrónico es obligatorio.");
      return;
    }

    if (!password) {
      setError("La contraseña es obligatoria.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const isRegister = await registerUser(username, email, password)

    if (isRegister) {
      navigate("/")
    } else {
      setError("El registro falló. Revisa tus datos y vuelve a intentarlo.");
      setPassword("")
    }
  }

  return (
    <>
      <section className="log-conteiner">
        <div className="login-card">
          <div className="flex flex-col p-4 gap-2">
            <h1>Registrarse</h1>
            <h2>Crea tu cuenta para continuar.</h2>
          </div>
          <div className="div-inputs">
            {
              error && <div>
                <p className="text-red-600 font-bold text-lg">{error}</p>
              </div>
            }
            <form onSubmit={handleSubmit} className="card-form gap-3">
              <div className="flex flex-col gap-2">
                <label className="text-left">Nombre de Usuario</label>
                <input
                  type="text"
                  onChange={(e) => { setUsername(e.target.value) }}
                  value={username}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-left">Correo Electrónico</label>
                <input
                  type="email"
                  onChange={(e) => { setEmail(e.target.value) }}
                  value={email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-left">Contraseña</label>
                <input
                  type="password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                />
              </div>
              <div className="btn-conteiner-col">
                <button className="btn btn-updt">Registrar</button>
                <p>¿Ya tienes una cuenta? <Link to="/login" className="hover:text-amber-600">Inicia Sesión</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export { Register }