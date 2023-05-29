// src/pages/HomePage.jsx

import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-left">
                <img src='..\stuti.jpg' alt="Stuti Agrawal" />
            </div>
            <div className="home-right">
                <div className="section">
                    <h2>About Me</h2>
                    <p>[Your about me content]</p>
                </div>
                <hr />
                <div className="section">
                    <h2>My Skills</h2>
                    <p>[Your skills content]</p>
                </div>
                <hr />
                <div className="section">
                    <h2>Education</h2>
                    <p>[Your education content]</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
