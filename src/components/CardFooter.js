import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

const CardFooter = () => {
  return (
   <footer className="footer">



<ul className="icon-row">

<li className="footer-li">
     <a href ="https://www.twitter.com/" target='_blank' className="footer-link twitter">
     <FaTwitterSquare className="footer-icon" />
         </a>  

</li>
  
<li className="footer-li">
    <a href ="https://www.facebook.com/" target='_blank' className="footer-link facebook">
         
   <FaFacebookSquare className="footer-icon" />
         </a>  

</li>

         <li className="footer-li">
         <a href ="https://www.instagram.com/" target='_blank' className="footer-link insta">
         <FaInstagramSquare className="footer-icon" />
         </a>  
    
    </li>

         <li className="footer-li">
         <a href ="https://www.github.com/" target='_blank' className="footer-link git">
         <FaGithubSquare className="footer-icon" /> 
         </a>  
    
    </li>

</ul>
  
  

   
 
   </footer>
  )
}

export default CardFooter