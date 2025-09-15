import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Achievements</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Support and IT Officer (Internship)</h3>
            <h4 className="vertical-timeline-element-subtitle">Landbank of the Philippines (Bataan Main Branch)</h4>
            <p>
              Provided IT support and served as IT Officer, overseeing database management and resolving system issues to enhance workflow performance. Handled both hardware and software troubleshooting through systematic diagnostics, ensuring minimal downtime and improved efficiency. Demonstrated effective communication and customer service when coordinating with stakeholders. Collaborated with teams while showcasing strong adaptability, multitasking, and task prioritization. Applied logical reasoning and keen attention to detail in troubleshooting, problem-solving, and decision-making processes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Founders Live Bataan - Champion</h4>
            <p>
We propose a technology-driven project to tackle social issues in the Philippines, featuring an energy-generating tile, EcoFare a system that allows commuters to use recyclable waste as fare and Calamity, an information platform that helps guide communities during disasters.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager & Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Appcon 2023 OTIS Japan inc - Top 20 Qualifiers</h4>
            <p>
Developed a web and mobile application to address social issues in the Philippines, including Calmity, a disaster-response app that provides informative solutions and guidance during emergencies. This project was supported by Otis Japan.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">SYNERGY SOFTWARE SOLUTIONS - Top 5</h4>
            <p>
              Developed a web and mobile application to address customer issues for Converge ICT Inc., supported by Synergy Software Solutions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;