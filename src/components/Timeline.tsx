import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faHandsHelping, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

interface Entry {
  title: string;
  org: string;
  location: string;
  date: string;
  icon: IconDefinition;
  current?: boolean;
  meta?: string;
  points: string[];
  tags?: string[];
}

const entries: Entry[] = [
  {
    title: "Full Stack Engineer",
    org: "Resilient",
    location: "San Francisco, USA",
    date: "October 2026 - Present",
    icon: faBriefcase,
    current: true,
    points: [
      "Built React/Next.js interfaces for an AI-native environmental compliance platform, turning complex permit requirements into clear dashboards and review-and-sign workflows.",
      "Shipped with 11 Playwright tests and 0 WCAG AA accessibility violations.",
      "Built a Python/FastAPI AI tool that extracts key details from permits and shows the source page for each one.",
      "Compared 3 AI models on 465 values from 8 permits, raising extraction accuracy from 62% to 87%.",
    ],
    tags: ["React", "Next.js", "Python", "FastAPI", "Playwright", "LLMs"],
  },
  {
    title: "University Volunteer",
    org: "Arizona State University",
    location: "Tempe, USA",
    date: "September 2026 - October 2026",
    icon: faHandsHelping,
    points: [
      "Architected a multi-agent LLM helpdesk that resolves 75% of billing, technical, and policy queries without human triage.",
      "Deployed 3 agents as FastAPI services on AWS Lambda with a Next.js UI and n8n workflow automation.",
      "Answers queries in under 3 seconds (p95) across 1,000+ indexed documents.",
    ],
    tags: ["LangGraph", "RAG", "ChromaDB", "AWS Bedrock", "Lambda", "n8n"],
  },
  {
    title: "Master's in Computer Engineering",
    org: "Arizona State University",
    location: "Tempe, AZ, USA",
    date: "August 2024 - May 2026",
    icon: faGraduationCap,
    meta: "GPA: 3.90",
    points: [
      "Foundations of Algorithms, Data Mining, Probability and Random Processes",
      "Cloud Computing, Data Processing at Scale, Mobile Computing",
      "Software Requirements, Engineering Blockchain Applications, Digital Verification and Testing",
    ],
  },
  {
    title: "Software Engineer",
    org: "Amazon.com, Inc.",
    location: "Pune, India",
    date: "August 2021 - July 2024",
    icon: faBriefcase,
    meta: "Global Solutions Risk and Compliance Team",
    points: [
      "Reduced manual product review time by 60% with a Python/scikit-learn text analysis service and REST APIs that flag compliance issues in product attributes.",
      "Cut SLA violations by 45% by optimizing a Python/MySQL/MSSQL service routing ambiguous classification cases to SMEs across millions of records.",
      "Built a real-time operations dashboard tracking throughput, exceptions, and DPMO, reducing issue detection time by 75%.",
      "Built a Kafka/Kubernetes monitoring pipeline that reduced repeat errors by 35% while maintaining 99.8% availability.",
      "Contributed 4 features to Cops Insight with QA, design, and engineering in an Agile/Scrum team.",
    ],
    tags: ["Python", "scikit-learn", "SQL", "Kafka", "Kubernetes", "JavaScript"],
  },
  {
    title: "Intern",
    org: "BSNL",
    location: "Pune, India",
    date: "December 2019",
    icon: faBriefcase,
    points: [
      "Implemented HTML/CSS/JavaScript dashboards to track outages and performance, improving detection by 25%.",
      "Integrated jQuery and Kendo UI, increasing error-tracking accuracy by 20%.",
    ],
  },
  {
    title: "Bachelor's in Electronics and Telecommunications",
    org: "Savitribai Phule Pune University",
    location: "Pune, India",
    date: "June 2017 - May 2021",
    icon: faGraduationCap,
    meta: "GPA: 3.54",
    points: [
      "Data Structures and Algorithms, Object Oriented Programming",
      "Artificial Intelligence, Machine Learning",
    ],
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline lineColor="">
          {entries.map((e) => (
            <VerticalTimelineElement
              key={e.title + e.date}
              className={`vertical-timeline-element--work timeline-card${e.current ? ' is-current' : ''}`}
              date={e.date}
              icon={<FontAwesomeIcon icon={e.icon} />}
              iconClassName="timeline-icon"
            >
              <div className="card-head">
                <h3 className="vertical-timeline-element-title">{e.title}</h3>
                {e.current && <span className="now-badge">Now</span>}
              </div>
              <h4 className="vertical-timeline-element-subtitle">
                {e.org} <span className="loc">· {e.location}</span>
              </h4>
              {e.meta && <div className="card-meta">{e.meta}</div>}
              <ul className="card-points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              {e.tags && (
                <div className="card-tags">
                  {e.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
