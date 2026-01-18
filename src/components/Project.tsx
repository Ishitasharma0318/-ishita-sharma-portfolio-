import React from "react";
import '../assets/styles/Project.scss';
import elasticFace from '../assets/images/elastic-face-recognition.jpg';
import serverlessVideo from '../assets/images/serverless-video-analytics.png';
// ... imports

// ... inside component
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={elasticFace} className="zoom" alt="Elastic Face Recognition Cloud Application" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Elastic Face Recognition Cloud Application (AWS IaaS)</h2></a>
                    <p>Architected a multi-tier face recognition application on AWS using Python, EC2, S3, and SQS to handle concurrent image processing requests. Developed a custom autoscaling controller algorithm (without AWS Auto Scaling) that dynamically scales application tier instances from 0 to 15 based on SQS queue depth, optimizing resource efficiency and cost. Integrated a PyTorch deep learning model in the backend tier for face recognition inference, decoupling web and application layers to maximize throughput and enable asynchronous processing of high-volume workloads.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={serverlessVideo} className="zoom" alt="Serverless Video Analytics Pipeline" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Serverless Video Analytics Pipeline (AWS PaaS)</h2></a>
                    <p>Designed a hybrid serverless architecture using AWS Lambda for highly parallelized face recognition on video streams, significantly reducing processing time compared to EC2-based approaches. Implemented a stateless video splitting module that shards videos into frames and triggers concurrent Lambda functions for near real-time inference. Integrated DynamoDB for low-latency storage of metadata and recognition results, enabling efficient state management across distributed processing. Containerized the PyTorch deep learning model using Docker and deployed via AWS ECR to ensure consistent execution across serverless functions.</p>
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
            </div >
        </div >
    );
}

export default Project;