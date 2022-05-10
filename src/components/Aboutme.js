

const Aboutme = ({about, interests}) => {
  return (
    <div className='about-me'>

        <> 
        <h3 className="info-title">About</h3>

        <p className="info">{about}
        </p>
        </>

        <> 
        <h3 className="info-title">Interests</h3>

        <p className="info">{interests}
        </p>
        </>




    </div>
  )
}


Aboutme.defaultProps = {
    about: 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.',
    interests: 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
}
export default Aboutme