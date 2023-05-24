import { useState } from "react";
import classNames from "../assets/styles/Shapes.module.css";
import { matchPath } from "react-router-dom";
export function Shapes() {
  const [listShapes, setListShapes] = useState(DATA_SHAPES);

  function handleMoveCircles(){
    // listedeki şekillerin  type'ını kontrol et...
   const modifiedListShapes = listShapes.map(item=>{
    
    if(item.type === "circle"){
        return {...item, y:item.y +10}
    }
    
    return item;

    } ) 
    setListShapes(modifiedListShapes)
  }

  function handleMoveSquare(){
    const modifiedListSquare = listShapes.map(item=>{
        if(item.type === "square"){
            return{...item, y:item.y -10}
        }
        return item;
    })
    setListShapes(modifiedListSquare)
  }


   

  const shapes = listShapes.map((shape) => (
    <span
      style={{
        position:"absolute",
        top:shape.y,
        left:shape.x,
        border: "2px solid black",
        borderRadius: shape.type === "circle" ? "50%":0,
        backgroundColor: "purple",
        width: 30,
        height: 30,
        display: "block",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      {shape.id}
    </span>
  ));

  return (
    <>
      <h1>Merhaba şekiller</h1>
      <div className={classNames.CountainerShapes}>
        {shapes}
        <button type="button" onClick={handleMoveCircles}>Daireleri aşşağı hareket ettir</button>
        <button type="button" onClick={handleMoveSquare}>Kareyi Yukarı gönder</button>
      </div>
    </>
  );
}

const DATA_SHAPES = [
  { id: 0, type: "circle", x: 50,  y: 100 },
  { id: 1, type: "square", x: 100, y: 100 },
  { id: 2, type: "circle", x: 150, y: 100 },
];
