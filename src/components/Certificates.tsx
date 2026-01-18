import React from "react";
import '../assets/styles/Certificates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faShieldAlt, faBrain, faMicrochip } from '@fortawesome/free-solid-svg-icons';

function Certificates() {
    return (
        <div className="certificates-container" id="certificates">
            <h1>Certifications</h1>
            <div className="certificates-grid">
                <div className="certificate-card">
                    <div className="cert-icon">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                    </div>
                    <h3>VIBE CODING - AI BuilderX Architect Program</h3>
                    <h4>Arizona State University</h4>
                    <span>December 2025</span>
                </div>

                <div className="certificate-card">
                    <div className="cert-icon">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                    </div>
                    <h3>SQL for Data Science</h3>
                    <h4>University of California, Davis</h4>
                    <span>September 2020</span>
                </div>

                <div className="certificate-card">
                    <div className="cert-icon">
                        <FontAwesomeIcon icon={faAws} size="3x" />
                    </div>
                    <h3>AWS Fundamentals going Cloud-native</h3>
                    <h4>Amazon Web Services (AWS)</h4>
                    <span>August 2020</span>
                </div>

                <div className="certificate-card">
                    <div className="cert-icon">
                        <FontAwesomeIcon icon={faShieldAlt} size="3x" />
                    </div>
                    <h3>Cybersecurity and IOT</h3>
                    <h4>University System of Georgia</h4>
                    <span>August 2020</span>
                </div>

                <div className="certificate-card">
                    <div className="cert-icon">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                    </div>
                    <h3>Digital skill: Artificial Intelligence</h3>
                    <h4>Accenture</h4>
                    <span>August 2020</span>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
