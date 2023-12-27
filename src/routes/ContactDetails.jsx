import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactLocation from "../components/Home/ContactLocation";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1000);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-details">
        <ContactLocation></ContactLocation>
        <h1 className="form-header">Contact Form</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            id="name"
            name="name"
            className="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            className="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            id="message"
            name="message"
            className="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactDetails;
