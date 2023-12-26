import { aboutUs } from "../assets/data/aboutUs";
import aboutImg from "../assets/images/about.jpg";
const About = () => {
  return (
    <div>
      <div className="header">
        <div className="heading">{aboutUs.heading}</div>
        <div className="body">
          <p>{aboutUs.body}</p>
          <p>
            <img src={aboutImg} alt="" />
          </p>
        </div>
        <div className="values">
          <h2>Our Values</h2>
          <p>{aboutUs.values}</p>
        </div>
      </div>
      <div className="team">
        

      </div>
      <div className="gallery"></div>
    </div>
  );
};

export default About;
