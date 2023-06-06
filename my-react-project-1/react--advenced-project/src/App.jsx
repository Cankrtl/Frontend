import { useRef, useState } from "react";
// useRef - use component memory witout triggering renders
import "./App.css";
import { BasicComponent } from "./components/BasicComponent";

function App() {
  return (
    <>
      <h1>UseRef</h1>
      <TestComponents />
      <StopWatch />
      <From/>



      <BasicComponent/>
    </>
  );
}

export default App;

function TestComponents() {
  const counter = useRef(0);
  const theme = useRef("light");

  console.log("rendering");

  function handleClick() {
    counter.current = counter.current + 1;
    console.log(counter.current);
  }

  return <button onClick={handleClick}>Tıklyınız {counter.current}</button>;
}

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const interval = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(interval.current)
  }

  return (
    <>
      <h1>Kronometre</h1>

      <h2>{now - startTime}</h2>
      <button type="button" onClick={handleStart}>
        başlat
      </button>
      <button type="durdur" onClick={handleStop}>
        {" "}
        Durduk
      </button>
    </>
  );
}


function From(){
  const inpuRef = useRef(null);

function handleClick(){
 inpuRef.current.focus();
}


  return(
    <>
    <form>
      <h2>Form </h2>
      <input ref={inpuRef} type="text" />
      
    </form>
    <button onClick={handleClick}> focus input </button>
    </>
  )
}