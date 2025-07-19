import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import dataAnalystIcon from '../assets/images/synergy.jpg'; 
import dataAnalystImage from '../assets/images/appcon.png'; // adjust the path as needed
import engineerImage from '../assets/images/landbank.png';
import techConsultantImage from '../assets/images/founders.png'; // adjust path if needed


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Achievements History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="2025 - 2025"
          iconStyle={{ background: '#ffffff', color: '#000' }} 
          icon={
            <img
              src={techConsultantImage}
              alt="Technology Consultant"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Founders Live Balanga</h3>
          <h4 className="vertical-timeline-element-subtitle">Champion among 5 leading schools and companies in Bataan.</h4>
          <p>
            We propose a technology-driven project to tackle social issues in the Philippines, featuring an energy-generating tile, EcoFare a system that allows commuters to use recyclable waste as fare and Calamity, an information platform that helps guide communities during disasters.
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#ffffff', color: '#000' }} // make background white or match image
            icon={
              <img
                src={engineerImage}
                alt="Full Stack Engineer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%' // makes it round like an icon
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">LandBank (Main Branch) – Balanga City, Bataan</h3>
            <h4 className="vertical-timeline-element-subtitle">Intern / Technical support</h4>
            <p>
              Provided technical support, managed databases, and resolved system issues through diagnostics to improve workflow performance. Demonstrated effective communication and customer service in coordinating with stakeholders. Collaborated with teams, showing strong adaptability, multitasking, and task prioritization. Applied logical reasoning and attention to detail in troubleshooting and decision-making processes.</p>
</VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: '#ffffff', color: '#000' }} // optional, background behind the image
            icon={
              <img 
                src={dataAnalystImage} 
                alt="Data Analyst" 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }} 
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Appcon 2023 OTIS Japan inc</h3>
            <h4 className="vertical-timeline-element-subtitle">Ranked among the Top 20 Qualifiers out of 200 outstanding School and University teams in the Philippines</h4>
            <p>
              Developed a web and mobile application to address social issues in the Philippines, supported by Otis Japan.
            </p>
          </VerticalTimelineElement>

         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2023"
          iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
          icon={
            <img 
              src={dataAnalystIcon} 
              alt="Data Analyst Icon" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          }
        >
      <h3 className="vertical-timeline-element-title">Synergy: Electrical and Electronics Engineering Summit (Manila, Philippines)</h3>
      <h4 className="vertical-timeline-element-subtitle">Secured 5th place among 10 competing Schools and University teams in the Philippines</h4>
      <p>
        Developed a web and mobile application to address customer issues for Converge ICT Inc., supported by Synergy Software Solutions.</p>
</VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;