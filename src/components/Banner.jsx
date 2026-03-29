import banner from "../assets/banner.svg";
const Banner = () => {
  return (
    <div className="banner">
      <img className="banner__image" src={banner} alt="banner image" />
      <p className="banner__title">
        Chez vous, <br /> partout et ailleurs
      </p>
    </div>
  );
};

export default Banner;
