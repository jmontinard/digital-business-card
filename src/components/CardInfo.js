import React from 'react'

const CardInfo = ({fullName, position, site}) => {
  return (
    <div className='cardInfo'>

        <h2 className='card-title'>
        {fullName}
        </h2>

        <p className='job-title'>{position}</p>

        <a hrefLang='#' className='website'>{site}</a>


    </div>
  )
}

CardInfo.defaultProps = {
    fullName: 'Laura Smith',
    position: 'Frontend Devoloper',
    site:'laurasmith.website'
}


export default CardInfo