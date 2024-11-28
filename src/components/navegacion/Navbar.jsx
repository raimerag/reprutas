import { Link } from "react-router-dom";
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
              <Link to="/" className="nav-item nav-link active">
                Home <span className="sr-only">(current)</span>
              </Link>
              {/* <a className="nav-item nav-link" href="#">Features</a>*/}

              <Link to="/GaTos" className="nav-item nav-link">
                Gatos
              </Link>

              <Link
                to="/formulario"
                className="nav-item nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                formulario
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
