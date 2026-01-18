import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Featured Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/jetchain.png" className="zoom" alt="JetChain: Off-Chain Supply Management Platform for Jet Fuel" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>JetChain: Off-Chain Supply Management Platform for Jet Fuel</h2></a>
                    <p>Built JetChain, a permissioned blockchain platform for jet fuel traceability from refineries to aircraft, preventing fraud and ensuring compliance. Developed Solidity smart contracts with role-based access control for Suppliers, Distributors, and Airlines, enforcing dual-approval custody transfers and immutable audit trails for batch IDs, quality certifications, and timestamps. Created a React and TailwindCSS frontend with Ethers.js wallet integration for real-time transfer initiation and batch history verification. Deployed on Polygon Amoy testnet for cost-efficient, Ethereum-compatible transactions.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/agentic-platform.png" className="zoom" alt="Agentic Customer Support Platform" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Agentic Customer Support Platform</h2></a>
                    <p>Architected a multi-agent customer support platform using LangGraph to intelligently route queries to specialized Billing, Technical, and Policy agents. Implemented RAG and CAG with ChromaDB vector database to ground responses in company knowledge, reducing hallucinations and ensuring accuracy. Built with FastAPI backend and Next.js frontend, integrating dual LLM backends (OpenAI GPT-4 for complex queries, AWS Bedrock for routine requests) to achieve 40% cost reduction while maintaining high response quality.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src="/ss-01.png" className="zoom" alt="One Click Resume to Portfolio Generator" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>One Click Resume to Portfolio Generator</h2></a>
                    <p>Built a resume-to-portfolio generator in a 24-hr hackathon using AWS Bedrock (Claude 3) with React.js, and developed a Node.js + PostgreSQL backend. Applied AI methods like prompt engineering, text parsing, and semantic understanding to integrate LLMs into full-stack applications, converting resumes into styled websites in under 30 seconds.</p>
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