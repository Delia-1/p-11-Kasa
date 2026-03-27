import { NavLink } from "react-router-dom";
import Banner from "../components/homepage/Banner";
const Homepage = () => {
  return (
    <>
      <Banner />
      <NavLink to={`/homepage/housePage`}>voir le logement</NavLink>
    </>
  );
};

export default Homepage;
