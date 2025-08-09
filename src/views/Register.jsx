import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <h1>Registrarse</h1>
        <h2>Crea tu cuenta para continuar.</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario</label>
            <input
              type="text"
              onChange={(e) => { setUsername(e.target.value) }}
              value={username}
            />
          </div>
          <div>
            <label>Correo Electrónico</label>
            <input
              type="email"
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
            />
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