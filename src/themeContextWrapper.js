import React, {useState,useEffect} from 'react'


import { ThemeContext,themes } from "./contexts/themeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);
 const mainContent = document.querySelector(".main-content")

 const cardInfo =document.querySelector('.cardInfo')

 const cardTitle =document.querySelector('.card-title')

 const website =document.querySelector('.website')

 const infoTitle =document.querySelectorAll('.info-title')

 const info =document.querySelectorAll('.info')

 const footer =document.querySelector('.footer')

 const darker = () =>{
   mainContent.classList.add('white-content')

    cardInfo.style.backgroundColor ='#1A1B21'

cardTitle.style.color ="var(--L-grey-bg)"

website.style.color ="var(--L-grey-bg)"


   infoTitle.forEach(title =>title.style.color = "var(--L-grey-bg)")
   
   info.forEach(info=>info.style.color = "#DCDCDC")

   footer.style.backgroundColor ='#161619'

 }

 const lighter = () =>{
        cardInfo.style.backgroundColor="var(--L-grey-bg)"

        cardTitle.style.color ="var(--primary-d-color)"
        cardTitle.style.color ="var(--L-grey-bg)"
    
        website.style.color ="var(--L-grey-bg)"

         infoTitle.forEach(title =>title.style.color = "var( --primary-d-color)")
       
       info.forEach(info=>info.style.color = "var( --secondary-d-color)")
    
       footer.style.backgroundColor ='var( --tertiary-L--grey)'
 }


  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
         
        darker()
      

          
        // document.body.classList.add('white-content');
        // Change all these styels

        break;
      case themes.dark:
      default:
        
    

        
        document.querySelector('.main-content').classList.remove('white-content')
        

    lighter()

        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}