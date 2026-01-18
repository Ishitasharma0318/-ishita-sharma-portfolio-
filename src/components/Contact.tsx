import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!</p>

          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:ishitasharma0318@gmail.com">ishitasharma0318@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+14252007809">+1 (425) 200-7809</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ishitasharma03" target="_blank" rel="noreferrer">linkedin.com/in/ishitasharma03</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Ishitasharma0318" target="_blank" rel="noreferrer">github.com/Ishitasharma0318</a></p>
          </div>

          {/* Form Removed as per request */}
        </div>
      </div>
    </div>
  );
}

export default Contact;