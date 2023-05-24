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

function App() {
  return (
    <>
      <header>
        <Logo />
        <NavMain key={Math.random()} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/iletişim_formu" element={<SimpleMessageForm />} />

          <Route path="/hareketli nokta" element={<MovingDot />} />

          <Route path="/yapıcaklar listesi" element={<ToDoList101 />} />

          <Route path="/şekiller" element={<Shapes />} />

          <Route path="/akordiyon" element={<Accordion />} />
        </Routes>
      </main>

      <footer>footer</footer>
    </>
  );
}

export default App;
