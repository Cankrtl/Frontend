import classes from "../assets/styles/CardList.module.css"

export function CardList({children}){
    return(
        <ul className={classes.CardList}>
        {children}
        </ul>
    )
}