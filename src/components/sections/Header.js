import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/sections/Header.css"
import { NavLink } from "react-router-dom"

const Header = () => {
  return(
  <nav className="navbar navbar-expand-lg bg-light Header-header">
    <div className="container-fluid Header-container">
      {/* <NavLink className="navbar-brand" to="/">Inicio</NavLink> */}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><NavLink className="nav-link active" to="/">Inicio</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link active" to="/Cupcakes">Cupcakes</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link active" to="/Nosotros">Nosotros</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header;