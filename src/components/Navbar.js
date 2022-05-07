import React from 'react'
// import Logo from '../images/logo-digital-bc.jpeg'
import Logo from '../images/logo-dbc1.png'

const Navbar = ({themeSwitcher}) => {

  return (
   <header>
   <nav className='
   navBar'>

       <div className='logo-container'>
       <img  className='logo' src={Logo} />
       <h1 className='company-name'>Company</h1>
       </div>
       
       <div className='navBar-row'> 
       <ul className='navBar-ul'>
           <li className='nav-li'><a className='nav-link' hrefLang='#'>Home </a></li>
           <li className='nav-li'><a className='nav-link' hrefLang='#'>About</a></li>
           <li className='nav-li'><a className='nav-link' hrefLang='#'>Contact Us</a> </li>

       </ul>
</div>
       
       <div className="theme-switch-wrapper">
    <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={themeSwitcher}/>
        <div className="slider round"></div>
  </label>
  
       </div>

   </nav>



   </header>
  )
}

export default Navbar