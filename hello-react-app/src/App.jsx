import { Featuredworks } from "./components/featuredWorks";

import { SectionContact } from "./components/SectionContact";

import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";

export function App() {
  return (
    <>
      <header>
        <Logo />
        <NavMain/>
      </header>
      <main>
        <Featuredworks />
        <SectionContact />
      </main>
      <footer>Alt</footer>
    </>
  );
}
