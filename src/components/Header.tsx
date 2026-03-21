import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>header</h1>
      <Link to={`/homepage`}>Acceuil</Link>
      <br />
      <Link to={`/about`}>A Propos</Link>
      <br />
      <br />
    </>
  );
};

export default Header;
