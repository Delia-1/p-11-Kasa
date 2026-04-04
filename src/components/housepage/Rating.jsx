import star from "../../assets/star.svg"
//via state gerer le nb de star pleine et vide sur toujours tot de 5
const Rating = ({nbStars}) => {

    // console.log("nb stars", nbStars)
    return (
        <div>
            <img src={star} alt="" />
        </div>
    )
}

export default Rating 