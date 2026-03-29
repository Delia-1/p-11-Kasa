import Banner from "../components/Banner";
import Card from "../components/homepage/Card";
import mockedData from "../data/mockedData.json";
const data = mockedData;

const Homepage = () => {
  return (
    <div className="main-container">
      <Banner />
      <section className="section-cards">
        {data.map(({ id, title, cover }) => {
          return <Card key={id} id={id} title={title} cover={cover} />;
        })}
      </section>
    </div>
  );
};

export default Homepage;
