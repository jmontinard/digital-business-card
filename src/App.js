import React,{ useState } from "react";
// import { Button, Container, InputGroup } from 'reactstrap';
import { ThemeContext,themes } from "./contexts/themeContext";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App({lightson}) {
  const [darkMode, setDarkMode] = React.useState(true);
  
  // const lightsPlz = () =>{
  //   setDarkMode(!darkMode);
  //   changeTheme(darkMode ? themes.light : themes.dark);
  // }
  return (
    <div className="container">

<ThemeContext.Consumer>
        {({ changeTheme }) => (
          <Navbar
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

      {/* <Navbar  /> */}


      <MainContent />
  
    </div>
  );
}

export default App;
