import { useState } from "react";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  const[theme,setTheme] = useState([])


  const themeSwitcher =(e) =>{
    // comeback to this 
    const checkbox = e.target.checked
  
    if(checkbox){
      console.log('its dark')
    {  document.body.style.backgroundColor = 'black'}
    setTheme([{light:false,dark:true}])
    // setTheme({light:false,dark:true})
    console.log(theme)
    console.log(`check is ${checkbox}`)
    } else{
      console.log('its light')
      {  document.body.style.backgroundColor = 'white'  }
      // setTheme({light:false,dark:true})


      setTheme([{light:true,dark:false}])
    console.log(theme)
    console.log(`check is ${checkbox}`)

    }
    console.log(`theme is ${JSON.stringify(theme)}`)

}
  return (
    <div className="container">
      <Navbar themeSwitcher={themeSwitcher} />
      <MainContent />
  
    </div>
  );
}

export default App;
