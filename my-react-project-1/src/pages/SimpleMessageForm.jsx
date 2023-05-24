import { useState } from "react";

import classes from "../assets/styles/SimpleMessageForm.module.css";

export function SimpleMessageForm() {
  const [isSent, setIsSent] = useState(false);
const [message, setmessage] = useState("Deneme")

function handleClick(){
    setIsSent(false);
    setmessage("");
}

  if (isSent) {
    return (
        <>
        <p>"{message}" Mesajınız gönderildi</p>
        <button type="button" onClick={handleClick}>Yeni bir mesaj gönderildi</button>
        </>
    )
  }

  function handleSubmit(e) {
    e.preventDefault();
   if (message.length < 3){
    return false
   }
    setIsSent(true);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Basit Mesaj Formu</h2>

      <textarea onChange={(e)=>{setmessage(e.target.value)}} />

      <button className={classes.btnSubmit} type="submit">
        gönder
      </button>
    </form>
  );
}
