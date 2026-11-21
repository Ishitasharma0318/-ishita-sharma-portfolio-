import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="October 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Resilient - San Francisco, USA</h4>
            <p>
              Building React/Next.js interfaces for an AI-native environmental compliance platform, turning complex permit
              requirements into clear dashboards and review-and-sign workflows, backed by 11 Playwright tests and 0 WCAG AA violations.
              Built a Python/FastAPI AI tool that extracts key details from permits and shows the source page for each one;
              compared 3 AI models on 465 values from 8 permits, raising accuracy from 62% to 87%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2026 - October 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">University Volunteer</h3>
            <h4 className="vertical-timeline-element-subtitle">Arizona State University - Tempe, USA</h4>
            <p>
              Architected a multi-agent LLM helpdesk (LangGraph, RAG, ChromaDB, AWS Bedrock) that resolves 75% of billing,
              technical, and policy queries without human triage. Deployed 3 agents as FastAPI services on AWS Lambda with a
              Next.js UI and n8n workflow automation, answering queries in under 3 seconds (p95) across 1,000+ indexed documents.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2024 - May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master's in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Arizona State University, AZ, USA - GPA: 3.90</h4>
            <p>
              Courses: Foundations of Algorithms, Mobile Computing, Software Requirements, Data Mining,
              Probability and Random Processes, Cloud Computing, Data Processing at Scale,
              Engineering Blockchain Applications, Digital Verification and Testing
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2021 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Amazon.com, Inc. (Global Solutions Risk and Compliance) - Pune, India</h4>
            <p>
              Reduced manual product review time by 60% with a Python/scikit-learn text analysis service and REST APIs that flag
              compliance issues in product attributes. Cut SLA violations by 45% by optimizing a Python/MySQL/MSSQL routing service
              across millions of records. Built a real-time operations dashboard (JavaScript, HTML, CSS) that reduced issue detection
              time by 75%, and a Python/SQL monitoring pipeline on Kafka and Kubernetes that reduced repeat errors by 35% while
              maintaining 99.8% availability. Shipped 4 features to Cops Insight in an Agile/Scrum team.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BSNL - Pune, India</h4>
            <p>
              Implemented dashboards in HTML/CSS & JavaScript to check outages & performance, enhancing detection by 25%.
              Integrated jQuery and Kendo UI to elevate front end functionality, increasing accuracy of error tracking by 20%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2017 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's in Electronics and Telecommunications</h3>
            <h4 className="vertical-timeline-element-subtitle">Savitribai Phule Pune University, MH, India - GPA: 3.54</h4>
            <p>
              Courses: Data Structures and Algorithms, Object Oriented Programming, Artificial Intelligence, Machine Learning
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
