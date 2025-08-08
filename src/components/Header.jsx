import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const { user } = useAuth()
  const { logoutUser } = useAuth()

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {
          user &&
          <nav>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          </nav>
        }
        {
          !user &&
          <nav>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </nav>
        }
      </div>
    </header >
  )
}

export { Header }