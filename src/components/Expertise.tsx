import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAws, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "HTML5",
    "CSS",
    "Java",
    "C++",
    "C#",
    "Kotlin"
];

const labelsSecond = [
    "AWS",
    "Azure",
    "Docker",
    "Git",
    "Jenkins",
    "Jira",
    "Figma",
    "Postman",
    "MySQL",
    "MSSQL",
    "PostgreSQL"
];

const labelsThird = [
    "Machine Learning",
    "PyTorch",
    "Pandas",
    "TensorFlow",
    "Data Mining",
    "AI/ML",
    "Blockchain",
    "Cloud Computing",
    "Data Processing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Experienced in building scalable web applications using modern technologies. Proficient in both frontend and backend development with expertise in Python, React, and Node.js.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Technologies:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Skilled in cloud platforms and DevOps practices. Experience with AWS, Azure, Docker, and CI/CD pipelines to ensure reliable and scalable deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Platforms:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>AI/ML & Data Science</h3>
                    <p>Specialized in machine learning and artificial intelligence applications. Experience with predictive analytics, data processing, and implementing AI solutions for business optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">AI/ML Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;