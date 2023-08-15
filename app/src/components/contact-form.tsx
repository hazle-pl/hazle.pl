import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const parentElement = e.target.parentElement;
    if (parentElement) {
      parentElement.classList.add('active');
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const parentElement = e.target.parentElement;
    if (parentElement && e.target.value === '') {
      parentElement.classList.remove('active');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('An error occurred while sending the message.');
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Row>
        <label>Name</label>
        <input autoComplete="off"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Row>
      <Row>
        <label>Email</label>
        <input
        autoComplete="off"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Row>
      <Row>
        <label>Message</label>
        <textarea
        autoComplete="off"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Row>
      <Row>
        <button type="submit">Send Message</button>
      </Row>
    </form>
  );
};

export default ContactForm;
