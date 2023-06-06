import classes from "../assets/styles/Card.module.css"
import { Label } from "./Label"

export function Card(){
    return(
        <div className={classes.Card}>
            <Label>Label 1 </Label>
            <h1>Card title</h1>
            <p>Card destcription</p>
        </div>
    )
}