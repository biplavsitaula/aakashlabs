import { Link } from "react-router-dom";
import { services } from "../assets/data/services";

const Services = () => {
  return (
    <>
      <center className="service-header">Services</center>
      <div className="services">
        {services.map((service) => (
          <div className="service" key={service.heading}>
            <div className="service-heading">{service.heading}</div>
            <div className="service-body">{service.body}</div>
            <Link to={"/contact"} className="service-btn">
              Get in Touch
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Services;
