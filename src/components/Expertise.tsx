import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Java",
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Scala",
    "Kotlin",
    "ReactJS",
    "Next.js",
    "NodeJS",
    "FastAPI",
    "HTML5",
    "CSS",
    "REST APIs",
    "Playwright"
];

const labelsSecond = [
    "AWS",
    "Lambda",
    "S3 / SQS",
    "EC2 / ECR",
    "Bedrock",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Microservices",
    "CI/CD",
    "Linux/UNIX",
    "Git",
    "Azure",
    "Jenkins",
    "Jira",
    "Postman"
];

const labelsThird = [
    "PostgreSQL",
    "MySQL",
    "MSSQL",
    "MongoDB",
    "DynamoDB",
    "ChromaDB",
    "Spark",
    "Pandas",
    "Query Optimization",
    "Schema Design"
];

const labelsFourth = [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "XGBoost",
    "Whisper",
    "LangGraph Multi-Agent",
    "RAG/CAG",
    "Vector DBs",
    "Tool Use / Function Calling",
    "Prompting (CoT, ReAct)",
    "AWS Bedrock / GPT-4",
    "Federated Learning",
    "Differential Privacy",
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
                        <p>Build production web applications end to end, from React/Next.js interfaces with accessibility and Playwright testing to Python/FastAPI and Node.js services behind REST APIs.</p>
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
                        <p>Design distributed, cloud-native systems on AWS with Docker, Kubernetes, and Kafka, and run them in production with CI/CD, capacity planning, incident response, and SLA/SLO ownership.</p>
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
                        <p>Work across SQL, NoSQL, and vector databases with a focus on schema design and query optimization over millions of records, plus large-scale data processing with Spark.</p>
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
                        <p>Build multi-agent LLM systems with LangGraph and RAG, train ML models for real-world detection tasks, and apply privacy-preserving techniques like on-device inference, federated learning, and differential privacy.</p>
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