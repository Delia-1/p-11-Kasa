import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>HOMEPAGE</h1>
      <Link to={`/homepage/housePage`}>voir le logement</Link>
    </>
  );
};

export default Homepage;
