import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'; // ✅ Add this
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faBug } from '@fortawesome/free-solid-svg-icons';




const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "PHP",
    "Basic familiarization Python",
    "Basic familiarization SQL",
    "Basic familiarization kotlin",
    
];

const labelsSecond = [
    "Basic familiarization Jmeter",
    "Basic familiarization Debugbear",
    "Basic familiarization Git",
    "Basic familiarization GitHub Actions",
    "BrowerStack",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have hands-on experience building a variety of web applications from scratch or from existing source code using modern technologies, with a strong focus on both frontend and backend development. My skill set includes React, TypeScript, JavaScript, HTML5, CSS3, SCSS, and PHP. I also have basic familiarization with Python, SQL, and Kotlin.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBug} size="3x" />
                    <h3>QA Testing: Automation & Manual</h3>
                    <p>Once the web application is built, I perform both automated and manual testing to ensure functionality, performance, and overall quality before deployment. I use Git to track test scripts, automation code, and bug fix branches — which helps QA collaborate effectively with developers and other testers. It’s also useful for reviewing test coverage and identifying changes related to bugs. With GitHub Actions, I can automatically run test scripts (such as unit, integration, or UI tests) and integrate cross-browser testing using BrowserStack to ensure compatibility across different devices and platforms. This helps maintain consistent testing and code quality throughout the development cycle.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                     <div className="skill">
                    <FontAwesomeIcon icon={faLanguage} size="3x" />
                    <h3>Languages</h3>
                    <p>I have strong communication skills, whether in English or Filipino, both in writing and speaking.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Languages I Use:</span>
                        {["English", "Filipino"].map((label, index) => (
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