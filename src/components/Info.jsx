import React from 'react'
import { personalInfo } from '../data'

const Info = () => {
  return (
    <>
    {personalInfo.map(({description},index)=>{
        return(
            <li className="info__item" key={index}>
                <span className='info__description'>{description}</span>
            </li>
        )
    })}
    </>
  )
}

export default Info