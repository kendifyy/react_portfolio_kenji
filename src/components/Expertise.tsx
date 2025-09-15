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
    
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "JMeter",
    "DebugBear",
   
];

const labelsThird = [
    "English",
    "Filipino",
    
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
                    <h3>Language</h3>
                    <p>
                        My personal languages are English and Filipino, but I am eager to learn and gain knowledge in other languages
                    </p>
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