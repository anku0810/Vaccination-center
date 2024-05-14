import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:example@gmail.com?subject=Message%20from%20${name}&body=${message}%0D%0A%0D%0AReply%20to:%20${email}`;
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-section1" id="Contact">
      <div className="container1">
        <h2 className="section-heading1">Contact Us</h2>
        <form className="contact-form1" onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message'
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit1">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
