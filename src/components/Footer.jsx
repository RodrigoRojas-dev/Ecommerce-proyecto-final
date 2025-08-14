import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <h3 className="h3-footer">Atenas Collection</h3>
        <p>Tu destino de moda en línea, donde la elegancia se encuentra con la atemporalidad.</p>
      </div>
      <div>
        <h3 className="h3-footer">Enlaces de Interés</h3>
        <ul>
          <li><Link to={"/"} className="link-footer">Inicio</Link></li>
          <li><Link to={"/sobre-nosotros"} className="link-footer">Sobre Nosotros</Link></li>
          <li><Link to={"/login"} className="link-footer">Iniciar Sesión</Link></li>
          <li><Link to={"/register"} className="link-footer">Registrarse</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="h3-footer">Contacto</h3>
        <p>Desarrollado por <a href="https://github.com/RodrigoRojas-dev" className="link-footer">Rodrigo Rojas</a></p>
        <p>&#xA9; 2025 Atenas Collection. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export { Footer }