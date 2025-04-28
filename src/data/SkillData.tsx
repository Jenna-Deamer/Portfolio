import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDrupal, faGitAlt , faCss3Alt, faWordpressSimple  } from '@fortawesome/free-brands-svg-icons'; 
import { faPlug } from '@fortawesome/free-solid-svg-icons';

const SkillCards = [
    {
        icon: <FontAwesomeIcon icon={faReact} />,
        title: "React.js",
        description: "Developed interactive web applications with React, focusing on responsive design and real-time data handling."
    },
    {
        icon: <FontAwesomeIcon icon={faDrupal} />,
        title: "Drupal",
        description: "Managed content and updates for multilingual ecommerce websites across 40+ regions, including building promotional web forms and landing pages."
    },
    {
        icon: <FontAwesomeIcon icon={faWordpressSimple} />,
        title: "WordPress",
        description: "Customized and maintained WordPress websites, ensuring smooth content updates and reliable functionality."
    },
    {
        icon: <FontAwesomeIcon icon={faCss3Alt} />,
        title: "CSS",
        description: "Designed responsive, visually appealing layouts with a focus on cross-browser compatibility and user experience."
    },
    {
        icon: <FontAwesomeIcon icon={faGitAlt} />,
        title: "Git",
        description: "Collaborated on team projects using Git for version control, ensuring organized and efficient code management."
    },
    {
        icon: <FontAwesomeIcon icon={faPlug} />,
        title: "API Integration",
        description: "Integrated external APIs into web applications to enhance functionality, such as adding real-time weather data for Smart Beach."
    }
];


export default SkillCards;
