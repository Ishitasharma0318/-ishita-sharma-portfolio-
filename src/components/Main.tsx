import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Main.scss';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/ishitasharma03" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:ishitasharma0318@gmail.com">
              <EmailIcon />
            </a>
            <a href="tel:+14252007809">
              <PhoneIcon />
            </a>
          </div>
          <h1>Ishita Sharma</h1>
          <div className="summary-container">
            <p className="summary">
              A Computer Engineering graduate student at Arizona State University with a passion for building intelligent, scalable software solutions. With three years of experience as a Senior Associate at Amazon, I've developed AWS-hosted automation systems and ML-powered tools that transformed compliance workflows, reducing manual effort by 50% and improving accuracy by 40%. My work spans the full stack, from backend services in Python and FastAPI to AI orchestration with LangGraph and GPT-4, always focused on delivering measurable impact at scale. Currently, I'm diving deep into AI-driven applications, recently winning Innovation Hacks 2025 with a one-click resume-to-portfolio generator and building dynamic pricing platforms that leverage multi-agent systems and demand forecasting. Whether it's automating complex workflows, designing intelligent agent architectures, or optimizing cloud infrastructure, I thrive on solving challenging problems that blend engineering rigor with cutting-edge AI. I'm actively seeking opportunities to bring my blend of production experience and graduate-level expertise to a forward-thinking team where I can continue pushing the boundaries of what's possible with code and AI.
            </p>
          </div>

          <div className="tech-stack">
            <h3>Tech Focus</h3>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ marginTop: '10px' }}>
              {["DSA", "AI/ML", "GenAI", "System Design", "Full Stack", "AWS", "Python", "SQL"].map((tech) => (
                <Chip key={tech} label={tech} className="chip" />
              ))}
            </Stack>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ishitasharma0318" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/ishitasharma03" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:ishitasharma0318@gmail.com">
              <EmailIcon />
            </a>
            <a href="tel:+14252007809">
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;