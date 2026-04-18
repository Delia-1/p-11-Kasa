import { memo } from "react";
import dropClose from "../assets/dropdown-closed.svg";
import { useState } from "react";

const Collapse = memo(
  ({
    title,
    content,
    equipments,
    isList = false,
    hasMidTitleDesktop = false,
    housepage = false,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <article className="collapse">
        <div className={`dropdown${housepage ? "-housepage" : ""}`}>
          <h3
            className={`dropdown__title ${hasMidTitleDesktop ? "mid-desktop" : ""}`}
          >
            {title}
          </h3>

          <button
            type="button"
            className="dropdown__trigger"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le contenu" : "Ouvrir le contenu"}
          >
            <img
              className={`dropdown__icon${isOpen ? " open" : ""}`}
              src={dropClose}
              alt="dropdown-closed"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className={`collapse__content ${isOpen ? "open" : ""}`}>
          <div className="collapse__inner">
            {!isList ? (
              <p className="collapse__text">{content}</p>
            ) : (
              <ul className="collapse__list">
                {equipments.map((equipment, index) => (
                  <li
                    className="collapse__list-item"
                    key={`${index}-${equipment}`}
                  >
                    {equipment}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    );
  },
);
export default Collapse;
