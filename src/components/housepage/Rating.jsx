import { memo } from "react";
import star from "../../assets/star.svg";
import starActive from "../../assets/star-red.svg";

const Rating = memo(({ nbStars, max = 5 }) => {
  let nbst = Number(nbStars);

  return (
    <div className="rating">
      {Array.from({ length: max }).map((_, index) => (
        <img
          key={index}
          className="star"
          src={index < nbst ? starActive : star}
          alt="star"
        />
      ))}
    </div>
  );
});

export default Rating;
