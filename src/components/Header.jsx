import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo kasa" className="header__image" />
      <nav className="header__nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
          to={`/homepage`}
        >
          ACCUEIL
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
          to={`/about`}
        >
          A PROPOS
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
