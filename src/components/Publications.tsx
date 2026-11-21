import React from "react";
import '../assets/styles/Publications.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faTrophy } from '@fortawesome/free-solid-svg-icons';

function Publications() {
    return (
        <div className="publications-container" id="publications">
            <h1>Publications</h1>
            <div className="publication-card">
                <div className="pub-icon">
                    <FontAwesomeIcon icon={faFileLines} />
                </div>
                <div className="pub-body">
                    <h3>SentinelEdge: A Lightweight, Streaming, Auditable Scam-Call Detection System for the Edge</h3>
                    <div className="pub-meta">
                        <span className="pub-venue">Accepted, EMNLP 2026 (System Demonstration Track)</span>
                        <span className="pub-award"><FontAwesomeIcon icon={faTrophy} /> 1st Place, ASU Claude Hackathon</span>
                        <span className="pub-date">March 2026 - August 2026</span>
                    </div>
                    <ul>
                        <li>Led core ML development of a real-time scam-call detector protecting seniors and vulnerable users, using Whisper, PyTorch, and a trained XGBoost classifier to transcribe live calls and flag scam intent amid $12.5B in 2024 losses.</li>
                        <li>Ran all inference on device to keep call audio private, and added privacy-preserving ML via simulated Federated Learning and Differential Privacy (ε=0.3).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Publications;
