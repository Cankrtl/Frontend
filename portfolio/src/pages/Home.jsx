export function Home() {
  return (
    <>
      <section
        className="banner"
        style={{ height: 200, position: "relative", padding: 0 }}
      >
        <img
          src="/banner01.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </section>
      <section>
        <h1>Ben Toni Stark</h1>
        <h2>Önyüz geliştiriciyim</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed rerum recusandae impedit? Labore nesciunt minima quidem iure libero, deleniti inventore laudantium animi corrupti quaerat sed, alias facere est adipisci!
        </p>
      </section>
    </>
  );
}
