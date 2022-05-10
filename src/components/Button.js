import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Button = ({text,text2}) => {
  return (
      <div className='btn-row'>
          <button className='email-btn btn'>
              <a href='#' className='contact-link'>
              <FaEnvelope className='icon'/>{text}
              </a>
             </button>
          <button className='linkedin-btn  btn'><a href='#' className='contact-link'>
          <FaLinkedin className='icon' />{text2}
              </a></button>

      </div>

  )
}

export default Button