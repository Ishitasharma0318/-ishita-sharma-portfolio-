import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Replace with your actual profile picture */}
          <img 
            src="/profile-photo.jpeg" 
            alt="Ishita Sharma - Software Development Engineer" 
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ishitasharma0318" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://linkedin.com/in/ishitasharma03" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
            <a href="mailto:ishitasharma0318@gmail.com">
              <EmailIcon/>
            </a>
            <a href="tel:+14252007809">
              <PhoneIcon/>
            </a>
          </div>
          <h1>Ishita Sharma</h1>
          <p className="title">Software Development Engineer</p>
          <p className="summary">
            Computer Engineering graduate student with 3 years of experience at Amazon, engineering innovative solutions in Python,
            SQL and Cloud Platforms, and applying AI/ML to deliver resilient systems, greater reliability, and cost saving results.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ishitasharma0318" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://linkedin.com/in/ishitasharma03" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
            <a href="mailto:ishitasharma0318@gmail.com">
              <EmailIcon/>
            </a>
            <a href="tel:+14252007809">
              <PhoneIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;