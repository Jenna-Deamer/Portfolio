import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDrupal, faGitAlt , faCss3Alt, faWordpressSimple  } from '@fortawesome/free-brands-svg-icons'; 
import { faPlug } from '@fortawesome/free-solid-svg-icons';

const SkillCards = [
    {
        icon: <FontAwesomeIcon icon={faReact}  />,
        title: "React.js",
        description: "Developed interactive web apps with React, focusing on responsive UI and real-time data handling."
    },
    {
        icon: <FontAwesomeIcon icon={faDrupal}  />,
        title: "Drupal",
        description: "Managed content and updates for multilingual websites for 40+ regions, including creating promotional web forms and landing pages."
    },
    {
        icon: <FontAwesomeIcon icon={faWordpressSimple}  />,
        title: "WordPress",
        description: "Customized and managed content for WordPress websites, ensuring smooth updates and functionality across various sites."
    },
    {
        icon: <FontAwesomeIcon icon={faCss3Alt}  />,
        title: "CSS",
        description: "Designed responsive, visually appealing layouts with a focus on cross-browser compatibility and user experience."
    },
    {
        icon: <FontAwesomeIcon icon={faGitAlt} />,
        title: "Git",
        description: "Collaborated on team projects using Git for version control, ensuring efficient code management and collaboration."
    },
    {
        icon: <FontAwesomeIcon icon={faPlug} />,
        title: "API Integration",
        description: "Integrated external APIs into web applications, enhancing functionality with real-time data, such as weather info for Smart Beach."
    }
];

export default SkillCards;
