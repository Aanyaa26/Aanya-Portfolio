import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/astrology_portfolio.png";
import Work2 from "./assets/campus_hive.jpg";
import Work3 from "./assets/landing_page.jpg";
import Work4 from "./assets/password_generator.png";
import Work5 from "./assets/QR_code_generator.png";
import Work6 from "./assets/project-2.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    description:"Hello, I'm Aanya Sharma, a dedicated web developer. My expertise lies in crafting elegant and functional digital solutions using HTML, CSS, and JavaScript, with a focus on front-end technologies like React.js.My commitment to delivering high-quality results is matched only by my passion for creating seamless user experiences. Beyond coding, I actively explore design trends and contribute to open-source initiatives, maintaining a sharp eye for innovation in the dynamic field of web development.With a strong foundation in web technologies and a meticulous approach to work, I am poised to bring sophistication and efficiency to your online projects. Let's collaborate and elevate your digital presence with precision and professionalism."},

  // {
  //   id: 2,
  //   title: 'Email : ',
  //   description: 'aanyasharma2408@gmail.com',
  // },

  // {
  //   id: 3,
  //   title: 'Github : ',
  //   description: 'https://github.com/Aanyaa26',
  // },
  // {
  //   id: 4,
  //   title: 'Leetcode : ',
  //   description: 'https://leetcode.com/aanyasharma2408/',
  // },
  // {
  //   id: 5,
  //   title: 'Linkedin ',
  //   description: 'https://www.linkedin.com/in/aanya-sharma-2841b2248/',
  // },
];

export const stats = [
  {
    id: 1,
    no: "75+",
    title: "leetcode <br /> Questions",
  },

  {
    id: 2,
    no: "3+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "5+",
    title: "Participation<br /> in hackathons",
  },

  {
    id: 3,
    no: "6+",
    title: "Achievements &<br />Certifications ",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Aug'23 - Sep'23",
    title: "Web Developement Intern <span> CodeSoft </span>",
    desc: "Collaborated with the development team to design and implement responsive and user-friendly web interfaces using HTML, CSS, and JavaScript",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023-PRESENT",
    title: "Core Team Member <span> nameSpace Community </span>",
    desc: "nameSpace is technical society of BPIT. Succesfully organized multiple online and offline events such as boot camps, contests, workshops and guest lectures",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023-PRESENT",
    title: " Union Member<span> Women in Big Data BPIT</span>",
    desc: "Hosted and anchored session based on Data Science and its applications at the session of Wibd. Managed and coordinate with internal and external organisations in conducting sessions, seminars and contests",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022-2026",
    title: "Bachelor in Technology: Computer Science Engineering <span> GGSIP University  </span>",
    desc: "Currently pursuing a Bachelor's degree in Computer Science and Engineering from Bhagwan Parshuram Institute of Technology, affiliated with Guru Gobind Singh Indraprastha University, New Delhi.",
  },

  
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "90",
  },

  {
    id: 3,
    title: "Css",
    percentage: "95",
  },

  {
    id: 4,
    title: "Php",
    percentage: "66",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "50",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "65",
  },

  {
    id: 8,
    title: "React",
    percentage: "85",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Astrological commercial site",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Astrologist Portfolio consisting of sections such as services, teams etc.",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://github.com/Aanyaa26/Astrology-Portfolio" target="_blank" rel="noopener noreferrer">https://github.com/Aanyaa26/Astrology-Portfolio</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Student Web Portal",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : Campus Hive",
        desc: "A hive for students to get any data related to their college in one place",
      },
     
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Node JS, React JS, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://github.com/thoughtlessnerd/campus-hive" target="_blank" rel="noopener noreferrer">https://github.com/thoughtlessnerd/campus-hive</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Medical Helpline Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc:"HTML, CSS, JavaScript, TailwindCSS"
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://github.com/Aanyaa26/hackodisha3.0" target="_blank" rel="noopener noreferrer">https://github.com/Aanyaa26/hackodisha3.0</a>,

      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Password Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "A website-based random password generator that allows users to generate strong passwords instantly.",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://github.com/Aanyaa26/Password-Generator" target="_blank" rel="noopener noreferrer">https://github.com/Aanyaa26/Password-Generator</a>,

      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "QR Code Generator",
    details: [
      {
        title: "Project : ",
        desc: "A website-based QR code generator made using HTML, CSS, and Javascript including its API",
      },
      
      {
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        title: "Preview : ",
        desc: <a href="https://github.com/Aanyaa26/QR-code-generator" target="_blank" rel="noopener noreferrer">https://github.com/Aanyaa26/QR-code-generator</a>,

      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Created a fully responsive landing page as a part of internship",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://github.com/Aanyaa26/Codsoft" target="_blank" rel="noopener noreferrer">https://github.com/Aanyaa26/Codsoft</a>,

      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme9,
    color: "green",
  },

  {
    id: 2,
    img: Theme1,
    color: "purple",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme2,
    color: "red",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
