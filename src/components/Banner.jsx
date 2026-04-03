import { useEffect } from "react";
import banner from "../assets/banner.svg";
import bannerAbout from "../assets/bannerAbout.svg";
import { useLocation } from "react-router-dom";

const Banner = () => {
let location = useLocation()

// utiliser lazy ou suspens pour la banner
useEffect(() => {
  const banner1 = new Image()
  banner1.src = banner;
  const banner2 = new Image()
  banner2.src = bannerAbout

}, [location.pathname])
const isAboutPage = location.pathname === "/about"

  return (
    <div className={!isAboutPage ? "banner" : "bannerAbout"}>
      {!isAboutPage ? 
      (<>
     <img className="banner__image" src={banner} alt="banner image" />
      <p className="banner__title">
        Chez vous, <br /> partout et ailleurs
      </p>
     </>)
      : 
      ( <img className="banner__image" src={bannerAbout} alt="banner image" />)}
    </div>
  );
};

export default Banner;
