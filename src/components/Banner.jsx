import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import srcBanner from "../assets/banner.svg";
import srcBannerAbout from "../assets/bannerAbout.svg";

const Banner = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className={isAboutPage ? "bannerAbout" : "banner"}>
      {!isAboutPage ? (
        <p className="banner__title">
          Chez vous, <br /> partout et ailleurs
        </p>
      ) : null}
    </div>
  );
};

export default Banner;
