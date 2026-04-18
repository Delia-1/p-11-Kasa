import { useState } from "react";
import arrow_prev from "../../assets/arrow_prev.svg";
import arrow_next from "../../assets/arrow_next.svg";

const Slideshow = ({ pictures }) => {
  const [activeImage, setActiveImage] = useState(0);
  const isSingleGallery = pictures.length === 1;

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % pictures.length);
  };

  const handlePrev = () => {
    setActiveImage((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow">
      <div
        className="slideshow__track"
        style={{ transform: `translateX(-${activeImage * 100}%)` }}
      >
        {pictures.map((pic, index) => (
          <img
            key={`${pic}-${index}`}
            className="slideshow__picture"
            src={pic}
            alt={`photo-${index + 1}`}
          />
        ))}
      </div>
      {!isSingleGallery ? (
        <div className="slideshow__nav">
          <button className="slideshow__prev-btn" onClick={handlePrev}>
            <img
              className="icon-prev"
              src={arrow_prev}
              alt="photo precedente"
            />
          </button>
          <button className="slideshow__next-btn" onClick={handleNext}>
            <img className="icon-next" src={arrow_next} alt="photo suivante" />
          </button>
        </div>
      ) : null}
      <div className="slideshow__counter-desktop">
        <p>{`${activeImage + 1}/${pictures.length}`}</p>
      </div>
    </div>
  );
};

export default Slideshow;
