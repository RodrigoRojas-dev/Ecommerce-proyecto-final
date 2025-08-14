import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { SearchBar } from "./SearchBar"
import AtenasCollection from "../assets/Atenas-Collection.png"
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logoutUser } = useAuth()

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <header className="main-header">
      <div>
        <Link to="/" className="logo-conteiner"><img src={AtenasCollection} alt="Logo de Atenas Collection" className="logo" /></Link>
      </div>

      <div className="mobile-menu-btn z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen
              ?
              <HiX className="text-4xl" />
              :
              <HiMenu className="text-4xl" />
          }
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-nav">
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`off-canvas-menu
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <SearchBar />
        <div className="desktop:hidden">
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
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header >
  )
}

export { Header }