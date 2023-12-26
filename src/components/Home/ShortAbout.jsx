import { about } from "../../assets/data/about";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about.jpg";

const ShortAbout = () => {
  return (
    <div className="short-about-container">
      <div className="short-about">
        <h1 className="about-heading">{about.heading}</h1>
        <div className="about-body">{about.body}</div>
        <div className="about-tag">{about.tag}</div>
        <Link to={"/contact"} className="about-btn">
          Consultation
        </Link>
      </div>
      <img src={aboutImg} alt="about-image" className="aboutImg" />
    </div>
  );
};
export default ShortAbout;
