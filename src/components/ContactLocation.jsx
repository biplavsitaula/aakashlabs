import { contact } from "../assets/data/contact";

const ContactLocation = () => {
  return (
    <>
      <div className="contact-location">
        <div className="contact-header">
          <center>Contact Us</center>
        </div>
        <div className="contact-details">
          <div className="contact-text">{contact.text}</div>
          {contact.details.map((data, index) => (
            <div key={index}>
              <div className="contact-head">{data.head}</div>
              <div className="contact-body">{data.body}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactLocation;
