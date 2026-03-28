import { useParams } from "react-router-dom";
import mockedData from "../data/mockedData.json";

const HousePage = () => {
  const { housepageId } = useParams();

  const data = mockedData.find((item) => {
    return item.id === housepageId;
  });

  return (
    <>
      <div>
        <p>id: {housepageId}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <img src={data.pictures[1]} alt="" />
      </div>
    </>
  );
};
export default HousePage;
