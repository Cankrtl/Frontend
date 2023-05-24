import classes from "../assets/styles/Lab01.module.css";
import { useState } from "react";

export function Lab01() {
  const [position, setPosition] = useState({ x: 100, y: 50 });

  function handleClick() {
    setPosition({
      x: Math.random() * 200,
      y: Math.random() * 200,
    });
  }

  return (
    <>
      <h3>Deney 01</h3>
      <div className={classes.Lab01}>
        <span
          style={{
            left: position.x,
            top: position.y,
          }}
        ></span>
        <button type="button" onClick={handleClick}>
          Tıklayın
        </button>
      </div>
    </>
  );
}
