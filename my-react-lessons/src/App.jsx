import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";
import { HomePage, ConditionalRendering, PassingProps, RenderingLists, KeepingComponentsPure, RespondingToEvents, ComponentMemory } from "./pages";
import { useState } from "react";



function App() {
   
  const [url, setUrl] = useState("home");

  // const url = "ComponentMemory";

  return (
    <>
      <header>
        <Logo />
        <NavMain  setUrl={setUrl}/>
      </header>
      <main>
        {url === "home" && <HomePage />}

        {url === "passing-props" && <PassingProps />}

        {url === "conditional-rendering" && <ConditionalRendering />}
 
        {url === "rendering-lists" && <RenderingLists/>}
          
        {url === "pure" && <KeepingComponentsPure/>}

        {url === "responding-to-event" && <RespondingToEvents/>}

        {url === "ComponentMemory" && <ComponentMemory/>}
      </main>
      <footer>Her hakkı saklıdır &copy; 2023</footer>
    </>
  );
}

export default App;
