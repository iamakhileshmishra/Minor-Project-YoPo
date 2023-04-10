import React from "react";
import "./ContactForm.css";

function ContactForm() {

  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/mayzlong"
      method="POST"
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          className="form-control"
          name="message"
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
