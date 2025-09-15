import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faLaptopCode, faWrench, faBrain } from '@fortawesome/free-solid-svg-icons';


const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "PHP",
    "Basic Familiarization Python, SQL, Android Kotlin and C#",
    "Microsoft Office (word, excel, powerpoint)",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "JMeter",
    "DebugBear",
   
];

const labelsThird = [
    "Effective Communication",
    "Logical Reasoning & Decision-Making",
    "Team Collaboration",
    "Adaptability & Eagerness to Learn",
    "Customer Service & Client Relations",
    "Attention to Detail",
    "Open to Feedback and Improvement",
    "Continuous Learning Mindset",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Web/Software Development</h3>
                    <p>
                        I am enthusiastic about creating web and software applications, combining creativity and functionality 
                        to deliver smooth user experiences. My work spans both frontend and backend development, 
                        using technologies like React, TypeScript, JavaScript, HTML5, CSS3, SCSS, and PHP. 
                        I also have basic familiarization with Python, SQL, Kotlin, and C#.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWrench} size="3x"/>
                    <h3>Developer Tools</h3>
                    <p>
                        After building a website or application, I work closely with clients and the team 
                        to streamline deployment automation, ensuring projects go live smoothly, reliably, 
                        and with confidence.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Soft Skills</h3>
                    <p>
I bring a mix of communication, problem-solving, and teamwork that helps me thrive in different environments. I enjoy adapting to new challenges, staying organized while juggling multiple tasks, and paying close attention to details that make a difference. I’m always eager to learn, open to feedback, and motivated to keep improving whether it’s in serving clients, working with a team, or taking on new opportunities for growth.                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
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