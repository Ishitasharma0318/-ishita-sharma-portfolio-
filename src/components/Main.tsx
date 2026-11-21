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
            alt="Ishita Sharma - Full Stack Engineer"
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
            <a href="mailto:ishitasharma0324@gmail.com">
              <EmailIcon />
            </a>
            <a href="tel:+14252007809">
              <PhoneIcon />
            </a>
          </div>
          <h1>Ishita Sharma</h1>
          <div className="summary-container">
            <p className="summary">
              Full Stack Engineer at Resilient, building AI-native tools for environmental compliance, and an M.S. Computer Engineering graduate from Arizona State University (GPA 3.90). I spent three years as a Software Engineer on Amazon's Global Solutions Risk and Compliance team, where I built Python and ML services that cut manual product review time by 60%, reduced SLA violations by 45%, and kept monitoring pipelines at 99.8% availability. Today I work across the stack, from React/Next.js interfaces and FastAPI services to multi-agent LLM systems with LangGraph, RAG, and AWS Bedrock. I led ML development of SentinelEdge, an on-device scam-call detector accepted at EMNLP 2026 (System Demonstrations) that won 1st place at the ASU Claude Hackathon, and I also won Innovation Hacks 2025 with a one-click resume-to-portfolio generator. I enjoy hard problems where careful engineering and applied AI meet, and I care about building software that is accurate, private, and genuinely useful to the people who rely on it.
            </p>
          </div>

          <div className="tech-stack">
            <h3>Tech Focus</h3>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ marginTop: '10px' }}>
              {["Full Stack", "AI/ML", "GenAI & Agents", "Distributed Systems", "System Design", "AWS", "Python", "TypeScript"].map((tech) => (
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
            <a href="mailto:ishitasharma0324@gmail.com">
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