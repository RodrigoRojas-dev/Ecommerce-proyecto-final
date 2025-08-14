import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { SearchBar } from "./SearchBar"
import AtenasCollection from "../assets/Atenas-Collection.png"

const Header = () => {
  const { user, logoutUser } = useAuth()

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <header>
      <div>
        <Link to="/"><img src={AtenasCollection} alt="Logo de Atenas Collection" /></Link>
      </div>
      <SearchBar />
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