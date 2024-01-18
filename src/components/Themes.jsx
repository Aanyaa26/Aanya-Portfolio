import React, { useState, useEffect } from "react";
import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";

const getStorageColor = () => {
  let color = "green";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState("light-theme");

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark-theme");
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div
          className="style__switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className="theme__toggler" onClick={toggleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor={changeColor} />;
          })}
        </div>

        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;


// import React, { useState, useEffect } from "react";
// import { themes } from "../data";
// import ThemeItem from "./ThemeItem";
// import { FaCog } from "react-icons/fa";
// import { BsSun, BsMoon } from "react-icons/bs";
// import "./themes.css";

// const getStorageColor = () => {
//   let color = "green";
//   if (localStorage.getItem("color")) {
//     color = localStorage.getItem("color");
//   }

//   return color;
// };

// const Themes = () => {
//   const [showSwitcher, setShowSwitcher] = useState(false);
//   const [color, setColor] = useState(getStorageColor());
//   const [theme, setTheme] = useState("light-theme");

//   const changeColor = (color) => {
//     setColor(color);
//   };

//   const toggleTheme = () => {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//     }

//     else{
//         setTheme('light-theme')
//     }
//   };

//   useEffect(() => {
//     document.documentElement.style.setProperty("--first-color", color);
//     localStorage.setItem("color", color);
//   }, [color]);


//   useEffect(() => {
//     document.documentElement.className = theme;
//       }, [theme]);

//   return (
//     <div>
//       <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
//         <div
//           className="style__switcher-toggler"
//           onClick={() => setShowSwitcher(!showSwitcher)}
//         >
//           <FaCog />
//         </div>

//         <div className="theme__toggler" onClick={toggleTheme}>
//           {theme === 'light-theme'? <BsMoon/> : <BsSun/>}
//         </div>

//         <h3 className="style__switcher-title">Style Switcher</h3>
//         <div className="style__switcher-items">
//           {themes.map((theme, index) => {
//             return (
//               <ThemeItem key={index} {...theme} changeColor={changeColor} />
//             );
//           })}
//         </div>

//         <div
//           className="style__switcher-close"
//           onClick={() => setShowSwitcher(!showSwitcher)}
//         >
//           &times;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Themes;

// import React, { useState } from "react";
// import { themes } from "../data";
// import ThemeItem from "./ThemeItem";
// import { FaCog } from "react-icons/fa";
// import { BsSun, BsMoon } from "react-icons/bs";
// import "./themes.css";

// const Themes = () => {
//   const [showSwitcher, setShowSwitcher] = useState(false);
//   const [color, setColor] = useState('red');

//   const changeColor = (color) =>{
//     setColor(color);
//   };

//   useEffect(() =>{
//     document.documentElement.style.setProperty('--first-color', color);
//   }, [color])

//   return (
//     <div>
//       <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
//         <div
//           className="style__switcher-toggler"
//           onClick={() => setShowSwitcher(!showSwitcher)}
//         >
//           <FaCog />
//         </div>

//         <div className="theme__toggler">
//           <BsMoon />
//         </div>

//         <h3 className="style__switcher-title">Style Switcher</h3>
//         <div className="style__switcher-items">
//           {themes.map((theme, index) => {
//             return (
//             <ThemeItem key={index} {...theme} changeColor={changeColor}/>
//           );
//           })}
//         </div>

//         <div
//           className="style__switcher-close"
//           onClick={() => setShowSwitcher(!showSwitcher)}
//         >
//           &times;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Themes;

// import React, { useState } from 'react';
// import { themes } from '../data';
// import ThemeItem from './ThemeItem';
// import { FaCog } from 'react-icons/fa';
// import { BsSun, BsMoon } from 'react-icons/bs';
// import './themes.css';

// const Themes = () => {
//     const [showSwitcher, setShowSwitcher] =useState(false);

//   return (
//     <div>
//         <div className={`${showSwitcher ? 'show-switcher':''}style__switcher`}>
//             <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
//                 <FaCog/>
//             </div>

//             <div className="theme__toggler">
//                 <BsMoon/>
//             </div>

//             <h3 className="style__switcher-title">Style Switcher</h3>
//             <div className='style__switcher-items'>
//                 {themes.map((theme,index)=>{
//                     return<ThemeItem key={index} {...theme}/>;
//                 })}
//             </div>

//             <div className="style__switcher-close">&times;</div>
//         </div>
//     </div>
//   )
// }

// export default Themes

// import React, { useState } from 'react';
// import { themes } from "../data";
// import ThemeItem from "./ThemeItem";
// import { FaCog } from "react-icons/fa";
// import { BsSun, BsMoon } from "react-icons/bs";
// import "./themes.css";

// const Themes = () => {
//   const [showSwitcher, setShowSwitcher] = useState(false);

//   return (
//     <div className={`style__switcher ${showSwitcher ? 'show-switcher' : ''}`}>
//       <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
//         <FaCog />
//       </div>
//       <div className="theme__toggler">
//         <BsMoon />
//       </div>

//       <h3 className="style__switcher-title">Style Switcher</h3>
//       <div className="style__switcher-item">
//         {themes.map((theme, index) => {
//           return <ThemeItem key={index} {...theme} />;
//         })}
//       </div>
//       <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}></div>
//     </div>
//   );
// };

// export default Themes;

// import React, { useState } from 'react';
// import { themes } from "../data";
// import ThemeItem from "./ThemeItem";
// import { FaCog } from "react-icons/fa";
// import { BsSun, BsMoon } from "react-icons/bs";
// import "./themes.css";

// const Themes = () => {
//     const [showSwitcher, setShowSwitcher] =useState(false);
//   return (
//     <div>
//       <div className={`${showSwitcher ? 'show-switcher':''}`}>
//         <div className="style__switcher-toggler" onClick={()=>
//         setShowSwitcher(!showSwitcher)}>
//             <FaCog/>
//         </div>
//         <div className="theme__toggler">
//             <BsMoon/>
//         </div>

//         <h3 className="style__switcher-title">Style Switcher</h3>
//         <div className="style__switcher-item">
//             {themes.map((theme, index)=>{
//                 return <ThemeItem key={index} {...theme} />;
//             })}
//         </div>
//         <div className="style__switcher-close">&times;</div>
//       </div>
//     </div>
//   );
// };

// export default Themes;
