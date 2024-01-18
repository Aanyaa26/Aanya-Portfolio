import React from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/me.jpg";
import { FaDownload } from "react-icons/fa";
import "./home.css";

const Home = () => {
  const resumeUrl = "https://drive.google.com/file/d/1zqTXwRTv8eGwUZ3WTByS3BqvZ2I8JEvC/view?usp=drive_link";

  const openResumeInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };

  return (
    <motion.section
      className="home section grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img src={Profile} alt="" className="home__img" />

      <motion.div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Aanya Sharma.</span> Web Developer
          </h1>

          <p className="home__description">
            As a front-end developer, I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...
          </p>

          <motion.button onClick={openResumeInNewTab} className="button">
            Download Resume {""}
            <span className="button__icon">
              <FaDownload />
            </span>
          </motion.button>
        </div>
      </motion.div>

      <div className="color__block"></div>
    </motion.section>
  );
};

export default Home;


// import React from "react";
// import { motion } from "framer-motion";
// import Profile from "../../assets/me.jpg";
// import { FaDownload } from "react-icons/fa";
// import "./home.css";

// const Home = () => {
//   const resumeUrl = "https://drive.google.com/file/d/1zqTXwRTv8eGwUZ3WTByS3BqvZ2I8JEvC/view?usp=drive_link";

//   const openResumeInNewTab = () => {
//     window.open(resumeUrl, "_blank");
//   };

//   const containerVariants = {
//     hidden: { opacity: 1, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.9,
//         staggerChildren: 0.9
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   return (
//     <motion.section
//       className="home section grid"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.img src={Profile} alt="" className="home__img" variants={itemVariants} />

//       <motion.div className="home__content" variants={itemVariants}>
//         <div className="home__data">
//           <h1 className="home__title">
//             <span>I'm Aanya Sharma.</span> Web Designer
//           </h1>

//           <p className="home__description">
//             As a front-end developer, I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...
//           </p>

//           <motion.button onClick={openResumeInNewTab} className="button" variants={itemVariants}>
//             Download Resume {""}
//             <span className="button__icon">
//               <FaDownload />
//             </span>
//           </motion.button>
//         </div>
//       </motion.div>

//       <div className="color__block" variants={itemVariants}></div>
//     </motion.section>
//   );
// };

// export default Home;


// import React from "react";
// import { motion } from "framer-motion";
// import Profile from "../../assets/me.jpg";
// import { FaDownload } from "react-icons/fa";
// import "./home.css";

// const Home = () => {
//   const resumeUrl = "https://drive.google.com/file/d/1zqTXwRTv8eGwUZ3WTByS3BqvZ2I8JEvC/view?usp=drive_link";

//   const openResumeInNewTab = () => {
//     window.open(resumeUrl, "_blank");
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1 } },
//   };

//   return (
//     <motion.section
//       className="home section grid"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.img src={Profile} alt="" className="home__img" />

//       <div className="home__content">
//         <div className="home__data">
//           <h1 className="home__title">
//             <span>I'm Aanya Sharma.</span> Web Designer
//           </h1>

//           <p className="home__description">
//             As a front-end developer, I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...
//           </p>

//           <button onClick={openResumeInNewTab} className="button">
//             Download Resume {""}
//             <span className="button__icon">
//               <FaDownload />
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="color__block"></div>
//     </motion.section>
//   );
// };

// export default Home;


// import React from "react";
// import Profile from "../../assets/me.jpg";
// import { FaDownload } from "react-icons/fa";
// import "./home.css";

// const Home = () => {
//   const resumeUrl = "https://drive.google.com/file/d/1zqTXwRTv8eGwUZ3WTByS3BqvZ2I8JEvC/view?usp=drive_link";

//   const openResumeInNewTab = () => {
//     window.open(resumeUrl, "_blank");
//   };

//   return (
//     <section className="home section grid">
//       <img src={Profile} alt="" className="home__img" />

//       <div className="home__content">
//         <div className="home__data">
//           <h1 className="home__title">
//             <span>I'm Aanya Sharma.</span> Web Designer
//           </h1>

//           <p className="home__description">
//             As a front-end developer, I have a deep understanding of web development technologies and best practices. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript and React...
//           </p>

//           <button onClick={openResumeInNewTab} className="button">
//             Download Resume {""}
//             <span className="button__icon">
//               <FaDownload />
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="color__block"></div>
//     </section>
//   );
// };

// export default Home;


// import React from "react";
// import Profile from "../../assets/me.jpg";
// import { Link } from "react-router-dom";
// import { FaDownload } from "react-icons/fa";
// import "./home.css";

// const home = () => {
//   return (
//     <section className="home section grid">
//       <img src={Profile} alt="" className="home__img" />

//       <div className="home__content">
//         <div className="home__data">
//           <h1 className="home__title">
//             <span>I'm Aanya Sharma.</span> Web Designer
//           </h1>

//           <p className="home__description">
//           As a front-end developer I have a deep understanding of web development technologies 
//           and best practices. I specialize in creating responsive, user-friendly websites and 
//           web applications using HTML, CSS, and JavaScript and React...
//           </p>

//           <Link to="https://drive.google.com/file/d/1zqTXwRTv8eGwUZ3WTByS3BqvZ2I8JEvC/view?usp=drive_link" className="button">
//             Download Resume {""}
//             <span className="button__icon">
//               <FaDownload />
//             </span>
//           </Link>
//         </div>
//       </div>

//       <div className="color__block"></div>
//     </section>
//   );
// };

// export default home;
