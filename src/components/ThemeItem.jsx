import React from 'react'

const ThemeItem = ({color, img, changeColor}) => {
  return <img src={img} alt="" className="theme__img" onClick={() =>
    {changeColor(color)}} />
  
}

export default ThemeItem


// import React from 'react';

// const ThemeItem = ({color, img}) => {
//   return (
//     <img src={img} alt='' className='theme__img'/>
    
//   );
// };

// export default ThemeItem;