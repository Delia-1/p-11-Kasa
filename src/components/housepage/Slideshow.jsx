import { useState } from "react"
import arrow_prev from "../../assets/arrow_prev.svg"
import arrow_next from "../../assets/arrow_next.svg"

const Slideshow = ({pictures}) => {
    const [activeImage, setActiveImage] = useState(0)
    const isSingleGallery = pictures.length === 1;

    const handleNext = () => {
        setActiveImage((prev) => (prev + 1) % pictures.length)
    }
    
    const handlePrev = () => {
        setActiveImage((prev) => (prev - 1 + pictures.length) % pictures.length )
    }

    return (
        <div className="slideshow">
            <img className="slideshow__picture" src={pictures[activeImage]} alt=""/>
            {!isSingleGallery ? (
            <div className="slideshow__nav"> 
                <button className="slideshow__prev-btn" onClick={handlePrev}>
                    <img className="icon-prev" src={arrow_prev} alt="previous picture" />
                </button>
                <button className="slideshow__next-btn" onClick={handleNext}>
                    <img className="icon-next" src={arrow_next} alt="next picture" />
                </button>
            </div>) : null}
        </div>
    )
}

export default Slideshow