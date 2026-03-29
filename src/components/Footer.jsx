import logo from "../assets/logo-footer.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="logo Kasa" />
        <small className="footer__rights">
          © 2020 Kasa. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
