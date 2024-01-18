import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={path}
                className= {({isActive}) => isActive ? 'nav__link active active-nav' : 'nav__link' }
                
                onClick={() =>setShowMenu(!showMenu)}
                >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import { links } from '../data';
// import "./navbar.css"

// const Navbar = () => {
//   const [showMenu, setShowMenu]= useState(false);
//   return (
//     <nav className='nav'>
//       <div className={'${showMenu ? "nav__menu show-menu": "nav__menu"}'}>
//         <ul className='nav__list'>
//           {links.map(({ name, icon, path }, index) => {
//             return (
//               <li className='nav__item' key={index}>
//                 <NavLink
//                 to={path}
//                 className={({isActive}) =>
//                 isActive ?
//                 'nav__link active-nav' : 'nav__link'}>
//                   {icon}
//                   <h3 className="nav__name">{name}</h3>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { links } from '../data';

// const Navbar = () => {
//   return (
//     <nav className='nav'>
//       <div className='nav__menu'>
//         <ul className='nav__list'>
//           {links.map(({name,icon,path},index)=>{
//             return (
//               <li className='nav__item' key={index}>
//                 <Navlink to ={path} className="nav__link">
//                   {icon}
//                   <h3 className="nav__name">{name}</h3>
//                 </Navlink>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//       <div className='nav__toggle'>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
