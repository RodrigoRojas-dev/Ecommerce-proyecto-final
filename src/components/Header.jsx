import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <nav>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button>Cerrar Sesión</button>
          </li>
        </nav>
      </div>
    </header>
  )
}

export { Header }