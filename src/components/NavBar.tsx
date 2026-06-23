import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">
          <span className="nav-logo f-3 f-bricollage">
            Aqilla Rachel Rabbani
          </span>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#hero" className="f-4 f-700">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="f-4 f-700">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolios" className="f-4 f-700">
              Portfolios
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
