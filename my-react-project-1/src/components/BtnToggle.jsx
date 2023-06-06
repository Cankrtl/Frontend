
import classes from "../assets/styles/BtnToggle.module.css"

import { useState } from "react"

export function BtnToggle({setTheme}){
    const [isActive, setIsActive] = useState(false);

    function handleClick(){
        setIsActive( !isActive  );
        setTheme( !isActive ? 'dark' : 'light');
    }

    return(
        <button className={`${classes.BtnToggle} ${isActive ? classes.BtnToggleActive : ''}`} onClick={handleClick}>
            <span>
                
            </span>
            
        </button>
    )
}