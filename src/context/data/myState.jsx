import React, { useState } from "react";

// import files
import MyContext from './myContext';

function MyState(props) {

    // for light and dark mode
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if(mode === "light"){
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }
    // end light and dark mode

  return (
    <MyContext.Provider value={{mode, toggleMode}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState;