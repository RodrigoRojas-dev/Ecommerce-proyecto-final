import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Atenas Collection</h3>
        <p>Tu destino de moda en línea, donde la elegancia se encuentra con la atemporalidad.</p>
      </div>
      <div>
        <h3>Enlaces de Interés</h3>
        <ul>
          <li><Link to={"/"}>Inicio</Link></li>
          <li><Link to={"/sobre-nosotros"}>Sobre Nosotros</Link></li>
          <li><Link to={"/login"}>Iniciar Sesión</Link></li>
          <li><Link to={"/register"}>Registrarse</Link></li>
        </ul>
      </div>
      <div>
        <h3>Contacto</h3>
        <p>Desarrollado por <a href="https://github.com/RodrigoRojas-dev">Gabriel Alberini</a></p>
      </div>
      <p>&#xA9; 2025 Atenas Collection. Todos los derechos reservados.</p>
    </footer>
  )
}

export { Footer }