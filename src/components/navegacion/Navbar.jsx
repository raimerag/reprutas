import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { setActiveClass } from "../../utils/setActive";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark text-white bg-green">
        <div className="container">
          <a className="navbar-brand ms-2" href="#">
            <img
              src="assets/img/logo-white.png"
              alt="Cuppon"
              className="cupon"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto ps-2">
              <NavLink to="/" className={setActiveClass}>
                Home <span className="sr-only">(current)</span>
              </NavLink>
              {/* <a className="nav-item nav-link" href="#">Features</a>*/}

              <NavLink to="/GaTos" className={setActiveClass}>
                Gatos
              </NavLink>

              <NavLink
                to="/formulario"
                className={setActiveClass}
                tabIndex="-1"
                aria-disabled="true"
              >
                formulario
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
