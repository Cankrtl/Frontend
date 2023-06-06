import "./assets/styles/reset.css";

import "./assets/styles/App.css";

import { Logo } from "./components/Logo";

import {
  SimpleMessageForm,
  Home,
  ToDoList101,
  Shapes,
  Accordion,
} from "./pages";

import { Route, Routes } from "react-router-dom";

import { NavMain } from "./components/NavMain";

import { MovingDot } from "./pages/MovingDot";

import { BtnToggle } from "./components/BtnToggle";

import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <header className={theme}>
        <Logo />
        <NavMain key={Math.random()} />
        <BtnToggle setTheme={setTheme} />
      </header>

      <main>
        <ThemeContext.Provider value={theme}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/iletişim_formu" element={<SimpleMessageForm />} />

            <Route path="/hareketli nokta" element={<MovingDot />} />

            <Route path="/yapıcaklar listesi" element={<ToDoList101 />} />

            <Route path="/şekiller" element={<Shapes />} />

            <Route path="/akordiyon" element={<Accordion />} />
          </Routes>
        </ThemeContext.Provider>
      </main>

      <footer>footer</footer>
    </>
  );
}

export default App;
