import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: '',
    city: '',
    companyName: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        e.target, // Form element
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent!');
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error.text);
          alert('Something went wrong. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      <h2>Get in touch with us!</h2>
      <p>Please fill out the quick form and we will be in touch as soon as possible.</p>

      <div className="form-field">
        <label htmlFor="enquiryType">Enquiry Type</label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Enquiry Type</option>
          <option value="Sales Enquiry">Sales Enquiry</option>
          <option value="Supplier Proposal">Supplier Proposal</option>
          <option value="Complaint">Complaint</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="city">City/Town</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone No</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button className="contact-form-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
