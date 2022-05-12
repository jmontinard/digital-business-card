import React, {useState,useEffect} from 'react'


import { ThemeContext,themes } from "./contexts/themeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);
 const mainContent = document.querySelector(".main-content")
  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
          console.log(document.querySelector('.main-content'))
          document.querySelector('.main-content').classList.add('white-content')
        // document.body.classList.add('white-content');
        // Change all these styels
        
        break;
      case themes.dark:
      default:
        console.log(document.querySelector('.main-content'))
        document.querySelector('.main-content').classList.remove('white-content')
        // document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}