import "./App.css";
import { Home, AboutMe, Lab } from "./pages";
import { NavMain } from "./components/NavMain";
import { Logo } from "./components/Logo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Logo />

        <NavMain />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkımda" element={<AboutMe />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </main>

      <footer>
        <Logo />
      </footer>
    </>
  );
}

export default App;
