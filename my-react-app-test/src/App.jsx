export function App() {
  return (
    <>
      <h1>Hello I'm Can</h1>
      <MyButton />
      <Card title="Card 1" exerpt="Lorem-1" />
      <Card title="Card 2" exerpt="Lorem-1" />
      <Card title="Card 3" exerpt="Lorem-1" />
      <Card title="Card 4" exerpt="Lorem-1" />
    </>
  );
}

function MyButton() {
  const myBtnJsx = <button>Tıkla bana bebek</button>;
  return myBtnJsx;
}

function Card({title, exerpt}){
  
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{exerpt}</p>
    </div>
  );
}
