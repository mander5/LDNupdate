import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/xdkezdja', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert('Oops! Something went wrong.');
        }
      })
      .catch((error) => {
        alert('Error submitting form.');
      });
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          ×
        </button>

        {submitted ? (
          <div className='thank-you-message'>
            <h2>Thanks for your message!</h2>
            <p>We’ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type='text' name='name' required />

              <label>Email</label>
              <input type='email' name='email' required />

              <label>Message</label>
              <textarea name='message' required></textarea>

              <button type='submit'>Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
