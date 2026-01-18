import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    // We allow the form to submit naturally to FormSubmit.co
    // But we can do some validation first if we want preventDefault on error
    if (name === '') {
      e.preventDefault();
      setNameError(true);
    }
    if (email === '') {
      e.preventDefault();
      setEmailError(true);
    }
    if (message === '') {
      e.preventDefault();
      setMessageError(true);
    }
  };

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

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            action="https://formsubmit.co/ishitasharma0318@gmail.com"
            method="POST"
            target="_blank" // Optional: open result in new tab or stay on page (formsubmit handles redirects)
            onSubmit={handleSubmit}
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;