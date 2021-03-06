import Headshot from "./Headshot"
import  headshot from '../images/headshot.png'
import CardInfo from "./CardInfo"
import CardFooter from "./CardFooter"

const DigitalBusinessCard = ({fullName,position,site}) => {
  return (
    <div className="card">
    <Headshot headshot={headshot} />
    <CardInfo fullName={fullName} 
    position = {position}
    site = {site}
    
    />
        
        <CardFooter />
    </div>
  )
}

export default DigitalBusinessCard