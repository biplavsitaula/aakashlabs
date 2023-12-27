import Avatar from "react-avatar";
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
        <h2>The Team</h2>
        <div className="team-list">
          {aboutUs.team.map((data, index) => (
            <div key={index}>
              <div className="avatar">
                <Avatar name={data.name} />
              </div>
              <div className="team-name">{data.name}</div>
              <div className="team-position">{data.position}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
