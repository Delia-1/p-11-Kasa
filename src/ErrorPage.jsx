import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
  <div className="error-page">
  <h2 className="error-page__title">404</h2>
  <p className="error-page__message">Oups! La page que <br/> vous demandez n'existe pas.</p>
  <NavLink className="error-page__link" to={`/homepage`} > Retourner sur la page d’accueil</NavLink>
  </div>
  )};

export default ErrorPage;
