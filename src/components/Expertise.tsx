import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';
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
    "Postman"
];

const labelsThird = [
    "PostgreSQL",
    "MySQL",
    "MSSQL",
    "MongoDB",
    "Spark",
    "Pandas"
];

const labelsFourth = [
    "PyTorch",
    "scikit-learn",
    "NLP",
    "LangGraph",
    "RAG/CAG",
    "Prompt Engineering",
    "GPT-4 Orchestration",
    "n8n"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
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
                        <FontAwesomeIcon icon={faDocker} size="3x" />
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
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Databases/Data</h3>
                        <p>Proficient in SQL and NoSQL databases, data modeling, and big data technologies. Experienced in optimizing database performance and data pipelines.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Data Stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>AI/ML and LLM</h3>
                        <p>Specialized in machine learning, NLP, and Large Language Models. Experienced with RAG systems, prompt engineering, and orchestrating AI agents.</p>
                        <div className="flex-chips">
                            <span className="chip-title">AI/ML Stack:</span>
                            {labelsFourth.map((label, index) => (
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