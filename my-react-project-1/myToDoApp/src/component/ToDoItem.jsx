import { useState } from "react";

export function ToDoItem({item, onDelete}) {
 const [isEditing, setIsEditing] = useState(false)
 const editTemplate = (
    <form>
        <input type="text" />
        <button type="submit">Kaydet</button>
        <button type="button" onClick={()=>{setIsEditing(false)}}>Kapat</button>
    </form>
 )
 const viewTemplate = (
    <li>
        <input type="checkbox" />
        {item.name}
        <button type="button" onClick={()=>{setIsEditing(true)}}>Düzenle</button>
        <button type="button" onClick={()=>{onDelete(item.id)}}>Sil</button>
    </li>
 )
  return (
  isEditing ? editTemplate : viewTemplate
  );
}
