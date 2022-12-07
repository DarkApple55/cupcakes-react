import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/Header.css"

const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg bg-light Header-header">
    <div className="container-fluid Header-container">
      <a className="navbar-brand" href="/">Inicio</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="/Cupcakes">Cupcakes</a></li>
          <li className="nav-item"><a className="nav-link active" href="/Nosotros">Nosotros</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header;