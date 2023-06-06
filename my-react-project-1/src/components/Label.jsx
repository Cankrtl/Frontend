import classes from "../assets/styles/Label.module.css"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export function Label({children}){
    const theme = useContext(ThemeContext)
    return(
        <>
        {theme}
        <span className={classes.Label}>
            {children}
        </span>
        </>
    )
}