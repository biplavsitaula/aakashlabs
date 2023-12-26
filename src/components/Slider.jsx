import { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDot } from "react-icons/go";

const IMAGES = [img1, img2, img3];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevious = () => {
    setImageIndex((index) => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  };

  const showNext = () => {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="slider">
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {IMAGES.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            className="imageSlider"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevious}
        className="image-slider-btn"
        style={{ left: "0" }}
      >
        <IoIosArrowDropleftCircle />
      </button>
      <button
        onClick={showNext}
        className="image-slider-btn"
        style={{ right: "0" }}
      >
        <IoIosArrowDroprightCircle />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: "1rem",
        }}
      >
        {IMAGES.map((_, index) => (
          <button
            key={index}
            className="dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <FaRegDotCircle /> : <GoDot />}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Slider;
