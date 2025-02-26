// import { Link } from "gatsby"
import React from "react";
import logo from "../img/logo-header.svg";
import logoDesktop from "../img/logo.svg";
import Whats from "../img/whatsapp-icon.png";
import { Link } from "gatsby";

const headerStyles = {
  background: "#fff",
  borderBottom: "1px solid #ccc",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000000,
};

const Header = ({ headerAction }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const [showMenu, setShowMenu] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={scrollPosition > 0 ? "sticky" : null}
      style={headerStyles}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ padding: 0 }}
      >
        <div className="container">
          <div className="d-lg-none">
            <a className="navbar-brand d-flex" href="/">
              <img alt="La Hora Sat" width="100" src={logo} />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              showMenu ? "navbar-collapse" : "collapse navbar-collapse"
            }
          >
            <ul className="d-flex navbar-nav me-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/cursos"
                  className="nav-link"
                  activeClassName="active"
                >
                  Cursos y talleres
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/asesorias"
                >
                  Asesorias
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  activeClassName="active"
                  href="/testimonios"
                >
                  Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
            <div className="logo-container d-none d-lg-block">
              <Link to="/">
                <img alt="La Hora Sat" width="90" src={logoDesktop} />
              </Link>
            </div>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="https://lahorasat.podia.com/login" target="_blank">
                  Iniciar sesión
                </a>
              </li>
              {headerAction && <li className="nav-item d-none d-lg-block">{headerAction}</li>}
            </ul>
          </div>
        </div>
      </nav>
      <a
        href="https://wa.me/+525510722129"
        target="_blank"
        className="whats-floating"
      >
        <img src={Whats} />
      </a>
    </header>
  );
};

export default Header;
