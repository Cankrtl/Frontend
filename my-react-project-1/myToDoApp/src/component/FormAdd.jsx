import { useState } from "react";

export function FormAdd({onAdd}) {
    const [name, setName] = useState("")
  
    function handleSubmit(e) {
    e.preventDefault();
    onAdd({name:name, completed:false});
  }

  function handleChange(e){
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="frm-add">
      <h1>Yapılacak bir iş </h1>
      <input type="text" onChange={handleChange} value={name}/>
      <button type="submit">Ekle</button>
    </form>
  );
}
