import React from 'react'
import Aboutme from './Aboutme'
import Button from './Button'

// <i class="fa-solid fa-envelope"></i>

const CardInfo = ({fullName, position,site,text,text2,about,interests}) => {
  return (
    <div className='cardInfo'>

        <h2 className='card-title'>
        {fullName}
        </h2>

        <p className='job-title'>{position}</p>

        <a hrefLang='#' className='website'>{site}</a>
        
        <Button text={'Email'} text2 ={'Linkedin'} />
      <Aboutme  about={about} interests={interests}/>
        
        


    </div>
  )
}

CardInfo.defaultProps = {
    fullName: 'Laura Smith',
    position: 'Frontend Devoloper',
    site:'laurasmith.website',
    about: 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
    interests: 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
}


export default CardInfo