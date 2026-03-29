import { NavLink } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <NavLink to={`/housepages/${id}`}>
      <article key={id} className="card">
        <img className="card__image" src={cover} alt={title} />
        <p className="card__title">{title}</p>
      </article>
    </NavLink>
  );
};
export default Card;
