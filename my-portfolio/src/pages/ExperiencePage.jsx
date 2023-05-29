// src/pages/ExperiencePage.jsx

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/ExperiencePage.css';
import data from './experienceData.json';  // Add your own data file

const ExperiencePage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleClick = item => {
        setSelectedItem(item);
    }
    const handleClose = () => {
        setSelectedItem(null);
    }
    return (
        <div className="experience-container">
            <h1 className="experience-heading">Experiences</h1>
            <div className="work-experience">
                <h2>Work Experience</h2>
                {data.work.map(item => (
                    <div className="card" onClick={() => handleClick(item)}>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                    </div>
                ))}
            </div>
            <div className="education-experience">
                <h2>Education</h2>
                {data.education.map(item => (
                    <div className="card" onClick={() => handleClick(item)}>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <div className="modal">
                    <button onClick={handleClose}>Close</button>
                    <ReactMarkdown>{selectedItem.details}</ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default ExperiencePage;
