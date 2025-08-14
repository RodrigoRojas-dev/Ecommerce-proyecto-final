const AboutUs = () => {


  return (
    <>
      <div className="bg-aboutus">
        <section >
          <div className="title-display">
            <h1 className="text-center">Sobre Atenas Collection</h1>
            <p>Un proyecto de e-commerce minimalista y funcional.</p>
          </div>
          <div className="grid-info">
            <div className="grid-cards-about">
              <h2>De qué trata el proyecto</h2>
              <p>
                Este proyecto nació como una plantilla de e-commerce, creada para fortalecer habilidades en <strong>desarrollo web</strong>. Su enfoque principal es la implementación de funcionalidades clave, desde la gestión de estilos y la interactividad del usuario hasta la integración con APIs externas. El resultado es una experiencia de compra simulada, robusta y escalable.
              </p>
            </div>
            <div className="grid-cards-about">
              <h2>A quién está dirigido</h2>
              <p>
                Este proyecto está diseñado para <strong>desarrolladores en formación</strong> y entusiastas del desarrollo web que buscan consolidar sus conocimientos. Sirve como una demostración práctica de habilidades en diseño responsivo, gestión de datos (CRUD), validación de formularios y consumo de APIs, siendo una pieza ideal para cualquier portafolio técnico.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="title-display">
              <h2 >Caracteristicas Tecnicas</h2>
            </div>
            <div className="grid-tecno">
              <div className="grid-cards-about">
                <h3>Autenticación y Seguridad</h3>
                <ul className="dots">
                  <li>Sistema de login/logout con Context API</li>
                  <li>Rutas protegidas con PrivateRoute</li>
                  <li>Validación de formularios en tiempo real</li>
                  <li>Validación de formularios del lado del cliente, ejecutada al momento de enviar los datos.</li>
                  <li>Manejo de errores y feedback al usuario</li>
                </ul>
              </div>
              <div className="grid-cards-about">
                <h3>Diseño Responsive</h3>
                <div>
                  <ul className="dots">
                    <li>Mobile-first design (hasta 480px)</li>
                    <li>Tablet optimization (hasta 880px)</li>
                    <li>Desktop experience (881px+)</li>
                    <li>Grid system adaptable</li>
                  </ul>
                </div>
              </div>
              <div className="grid-cards-about">
                <h3>Funcionalidades Avanzadas</h3>
                <div>
                  <ul className="dots">
                    <li>Búsqueda de productos en tiempo real</li>
                    <li>CRUD completo de productos</li>
                    <li>Modal popup para edición</li>
                  </ul>
                </div>
              </div>
              <div className="grid-cards-about">
                <h3>Experiencia de Usuario</h3>
                <div>
                  <ul className="dots">
                    <li>Interfaz intuitiva y moderna</li>
                    <li>Mensajes de feedback claros</li>
                    <li>Navegación fluida entre páginas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cards-about">
            <h2>¿Tenés alguna pregunta?</h2>
            <p>Este proyecto fue desarrollado como parte del aprendizaje de React y las tecnologías modernas de desarrollo web. Si tenés alguna consulta o sugerencia, no dudes en contactarnos.</p>
          </div>
          <div className="btn-conteiner justify-center p-4">
            <a href="https://github.com/RodrigoRojas-dev" className="btn-2 btn-updt">Ver más proyectos</a>
          </div>
        </section>
      </div>
    </>
  )
}

export { AboutUs }