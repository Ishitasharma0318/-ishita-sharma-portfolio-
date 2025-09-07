import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
            date="August 2024 - May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master's in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Arizona State University, AZ, USA - GPA: 3.78</h4>
            <p>
              Courses: Foundations of Algorithm, Mobile Computing, Software Requirements Specifications, Data Mining, 
              Probability and Random Processes, Knowledge Representation, Cloud Computing, Data Processing at Scale, 
              Engineering Blockchain Applications
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
            <h3 className="vertical-timeline-element-title">Senior Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Amazon.com, Inc. - Pune, India</h4>
            <p>
              Worked in Amazon's Global Solutions Risk and Compliance (GSRC) team, developing Python and SQL tools to optimize
              product document and detail page reviews for Harmonized Tariff Schedule (HTS) code assignment, reducing manual effort by 50%.
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