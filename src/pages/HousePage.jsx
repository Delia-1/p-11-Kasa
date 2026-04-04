import { useParams } from "react-router-dom";
import mockedData from "../data/mockedData.json";
import Slideshow from "../components/housepage/Slideshow";
import Collapse from "../components/Collapse";
import Tag from "../components/housepage/Tag";
import Rating from "../components/housepage/Rating";



const HousePage = () => {
  const { housepageId } = useParams();

  const data = mockedData.find((item) => {
    return item.id === housepageId;
  });

const {title, description, pictures, tags, rating} = data

  return (
    <>
      <div className="housepage">
        <Slideshow  pictures={pictures} />
        <h2 className="housepage__title">{title}</h2>
        <p className="housepage__desc">{description}</p>
        <div className="housepage__tags">
          {tags.map((tag, index) => (    
            <Tag key={`${tag}-${index}`} tag={tag}/>
          ))}
        </div>
        <div>
          <Rating nbStars={rating}/>
          <div>
            <p></p>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
        <Collapse />
        <Collapse />
      </div>
    </>
  );
};
export default HousePage;
