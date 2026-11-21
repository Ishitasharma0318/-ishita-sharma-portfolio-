import React from "react";
import '../assets/styles/Project.scss';
import elasticFace from '../assets/images/elastic-face-recognition.jpg';
import serverlessVideo from '../assets/images/serverless-video-analytics.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Featured Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/rideshare-pricing.jpg" className="zoom" alt="AI Powered Rideshare Dynamic Pricing" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>AI Powered Rideshare Dynamic Pricing and Demand Forecasting Platform</h2></a>
                    <p>Engineered an AI-driven rideshare platform that dynamically adjusts pricing based on real-time demand, events, and traffic. Built a LangGraph multi-agent pricing engine where specialized agents analyze driver availability, rider demand, competitor pricing, and contextual factors (weather, events, traffic), orchestrated by GPT-4 to generate optimal surge multipliers. Implemented FastAPI WebSocket connections for live price updates and n8n workflows to ingest data from event and traffic APIs into a ChromaDB RAG system providing agents with historical pricing context. Developed Prophet time-series models for 30/60/90-day demand forecasting, enabling proactive driver allocation. Built a Next.js dashboard for operators to visualize demand heatmaps and surge zones, with MongoDB Atlas storing ride history and pricing decisions for analysis, targeting 25% peak-demand revenue uplift.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/jetchain.png" className="zoom" alt="JetChain: Off-Chain Supply Management Platform for Jet Fuel" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>JetChain: Off-Chain Supply Management Platform for Jet Fuel</h2></a>
                    <p>Built JetChain, a permissioned blockchain platform for jet fuel traceability from refineries to aircraft, preventing fraud and ensuring compliance. Developed Solidity smart contracts with role-based access control for Suppliers, Distributors, and Airlines, enforcing dual-approval custody transfers and immutable audit trails for batch IDs, quality certifications, and timestamps. Created a React and TailwindCSS frontend with Ethers.js wallet integration for real-time transfer initiation and batch history verification. Deployed on Polygon Amoy testnet for cost-efficient, Ethereum-compatible transactions.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={elasticFace} className="zoom" alt="Elastic Face Recognition Cloud Application" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Elastic Face Recognition Cloud Application (AWS IaaS)</h2></a>
                    <p>Architected a multi-tier face recognition application on AWS using Python, PyTorch, EC2, S3, and SQS to handle concurrent image processing requests. Developed a custom autoscaling controller (without AWS Auto Scaling) that scales application-tier instances from 0 to 15 based on SQS queue depth and returns to 0 when idle, avoiding wasted compute. Integrated a PyTorch deep learning model in the backend tier for face recognition inference, decoupling web and application layers to maximize throughput and enable asynchronous processing of high-volume workloads.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={serverlessVideo} className="zoom" alt="Serverless Video Analytics Pipeline" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Serverless Video Analytics Pipeline (AWS PaaS)</h2></a>
                    <p>Designed a hybrid serverless architecture using AWS Lambda for highly parallelized face recognition on video streams, significantly reducing processing time compared to EC2-based approaches. Implemented a stateless video splitting module that shards videos into frames and triggers concurrent Lambda functions for near real-time inference. Integrated DynamoDB for low-latency storage of metadata and recognition results, enabling efficient state management across distributed processing. Containerized the PyTorch deep learning model using Docker and deployed via AWS ECR to ensure consistent execution across serverless functions.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/agentic-platform.png" className="zoom" alt="Agentic Customer Support Platform" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Agentic Customer Support Platform</h2></a>
                    <p>Architected a multi-agent LLM helpdesk using LangGraph that routes queries to specialized Billing, Technical, and Policy agents, resolving 75% of queries without human triage. Grounded responses with RAG over ChromaDB and AWS Bedrock across 1,000+ indexed documents to reduce hallucinations. Deployed the 3 agents as FastAPI services on AWS Lambda with a Next.js UI and n8n workflow automation, answering queries in under 3 seconds (p95).</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/ss-01.png" className="zoom" alt="One Click Resume to Portfolio Generator" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>One Click Resume to Portfolio Generator | Innovation Hacks 2025, 1st Place</h2></a>
                    <p>Won 1st place at Innovation Hacks 2025 by leading the team to build, in 24 hours, an LLM pipeline (AWS Bedrock, React, Node.js, PostgreSQL) that turns an uploaded resume into a live portfolio website in under 30 seconds. Applied prompt engineering, text parsing, and semantic understanding to integrate LLMs into a full-stack application.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/LSTM.jpeg" className="zoom" alt="LSTM Auto-Scaling Visualization" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Forecasting-Based Auto-Scaling for Video Streaming</h2></a>
                    <p>Devised a Long Short Term Memory (LSTM) based predictive analytics system in Python (TensorFlow, Pandas) using YouTube trending data to accurately forecast video traffic, deployed cloud scaling and decreasing costs by 30%. Refined forecast accuracy, eliminated SLA violations by 90% & simulated real time cloud scaling while maintaining SLA.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/whatsapp2.png" className="zoom" alt="WhatsApp Group Chat Analysis" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>WhatsApp Group Chat Analysis</h2></a>
                    <p>Developed a full-stack sentiment analysis tool for WhatsApp group chats by processing 10,000+ messages using Python, Pandas, NumPy, and regex to extract chat insights. Generated a real-time dashboard with React.js, Next.js, and Pusher, and integrated sentiment analysis APIs via a Node.js/Express.js backend, achieving 98% parsing accuracy.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/Tiktak.jpeg" className="zoom" alt="Tic-Tac-Toe AI Game App" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Tic-Tac-Toe AI Game App</h2></a>
                    <p>Engineered a Tic-Tac-Toe mobile app in Kotlin with DBMS integration; implemented Minimax with alpha-beta pruning to create provably unbeatable AI across 3 difficulty modes, storing 500+ game records with enhanced query support.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/Contextmonitor.jpeg" className="zoom" alt="Context Monitor App" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Context Monitor App</h2></a>
                    <p>Developed an Android application in Kotlin to monitor vital signs, accurately measuring heart rate via camera/flash and respiratory rate via accelerometer. Integrated symptom reporting with a local RoomDB database, enabling secure storage and retrieval of 10+ symptoms along with sensor data for context aware health monitoring.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;