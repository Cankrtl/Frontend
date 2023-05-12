import { useState } from "react";
import { sculptureList } from "../data/data";

export function ComponentMemory() {
  return (
    <>
      <h1>Component's Memory - Bir komponent'in hafızası</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
        praesentium facere laudantium illum explicabo itaque quos nisi quidem
        voluptatibus. Quis!
      </p>

      <ButtonNotRendering />
      <Button />

      <Carousel />
    </>
  );
}

const ButtonNotRendering = () => {
  console.log("rendering");

  let counter = 0;

  function handleClick() {
    counter = counter + 1;
    console.log(counter);
  }

  return <button onClick={handleClick}>Hello {counter}</button>;
};

const Button = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return <button onClick={handleClick}>Hello {counter}</button>;
};

function Carousel() {
  // let currentIndex = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [showmMore, setshowMore ] = useState(false);

  const { name, url, alt, artist, description } = sculptureList[currentIndex];

  const isLastIndex = currentIndex === sculptureList.length - 1 ;
  
  const isFirstIndex = currentIndex === 0;

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
  }

  function handlePrevClick(){
    setCurrentIndex(currentIndex -1);
  }

  return (
    <div style={{ border: "1px solid limegreen", padding: "8px" }}>
      <h2>{name}</h2>
      <p>
        <button onClick={handlePrevClick} disabled={isFirstIndex}>
          Önceki
        </button>
        {currentIndex + 1}/{sculptureList.length}
        <button onClick={handleNextClick} disabled={isLastIndex}>
          Sonraki
        </button>
      </p>
      <img src={url} alt={alt} />
      <h3>{artist}</h3>
      <button onClick={()=>{setshowMore(!showmMore)}}>{showmMore ? 'Detay Kapat' : 'Detay Göster'}</button>
      {showmMore && <p>{description}</p>}
    </div>
  );
}

