
import React from "react";
import mock10 from '../assets/images/trabajuan.jfif';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://trabajuan.click/" target="_blank" rel="noreferrer"><img src={trabajuan} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://trabajuan.click/" target="_blank" rel="noreferrer"><h2>TrabaJuan</h2></a>
                <p>TrabaJuan is a job-matching web platform built using PHP, HTML, CSS, and JavaScript. It is designed to connect job seekers with casual, part-time, or flexible work opportunities, making the hiring and application process simple and accessible—especially within local communities like Bataan, Philippines. The platform allows job seekers to create profiles, browse available jobs, and apply directly online, while employers can post job listings and manage applications efficiently. TrabaJuan emphasizes ease of use, accessibility, and community-driven employment solutions, and has been adapted to their community through a partnership with PESO Orion, Bataan.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;

