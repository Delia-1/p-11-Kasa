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

  const {
    title,
    description,
    pictures,
    tags,
    rating,
    location,
    equipments,
    host,
  } = data;

  // const tagsList = useMemo(() => {
  //   return tags.map((tag, index) => (
  //       <Tag key={`${tag}-${index}`} tag={tag}/>
  //     )
  //   )
  // },[tags])

  return (
    <>
      <div className="housepage">
        <Slideshow pictures={pictures} />
        <h2 className="housepage__title">{title}</h2>
        <p className="housepage__desc">{location}</p>
        <div className="housepage__tags">
          {/* {tagsList} */}
          {tags.map((tag, index) => (
            <Tag key={`${tag}-${index}`} tag={tag} />
          ))}
        </div>
        <div className="house-infos">
          {/* {ratingString} */}
          <Rating nbStars={rating} />
          <div className="house-infos__host">
            <p className="host-name">{host.name}</p>
            <div className="host-pic-wrapper">
              <img
                className="host-picture"
                src={host.picture}
                alt="host picture"
              />
            </div>
          </div>
        </div>
        <div className="collapses-section">
          <Collapse title={"Description"} content={description} />
          <Collapse
            title={"Équipements"}
            isList={true}
            equipments={equipments}
          />
        </div>
      </div>
    </>
  );
};
export default HousePage;
