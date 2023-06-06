import { Card } from "../components/Card";
import { CardList } from "../components/CardList";
import { ThemeContext } from "../context/ThemeContext";
export function Home() {
  return (
    <>
      <h1>Bu eğitimde öğrenilen konular</h1>

      <CardList >
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </>
  );
}
