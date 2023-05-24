import { Link } from "react-router-dom";
import { IconBolt } from "./Icons";
import classes from "../assets/styles/Logo.module.css";

export const Logo = () => (
  <Link to="/" className={classes.Logo}>
    <IconBolt />
    Yzl3504
  </Link>
);
