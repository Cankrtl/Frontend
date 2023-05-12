export function HomePage() {
  return (
    <>
      <h1>Ana sayfa</h1>
      <h2>Using js in jsx(Jsx içinde js kullanmak)</h2>
      <p>Süslü parantezler arasında js expressionlar kullanabilirsiniz </p>
      <Profiles />
      <Button />
      <Button2 />
    </> 
  );
}

function Profiles() {
  const title = " Ünlü insan Profilleri";
  const myNum = 3;
  return (
    <div>
      <h3 className={Math.random()}>{title}</h3>
      <h4>{Math.random()}</h4>
      <h5>{`${myNum} deneme`}</h5>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </div>
  );
}

function Avatar() {
  const imgSrc = "https://i.imgur.com/MK3eW3Am.jpg";
  const avatarClass = "avatar";
  const descripttion = "Henry Ford";
  return <img className={avatarClass} src={imgSrc} alt={descripttion} />;
}

function Button() {
  const txtContent = "Hello";
  const btnType = "button";
  const btnStyles = { backgroundColor: "red", color: "white" };
  return (
    <button type={btnType} style={btnStyles}>
      {txtContent}
    </button>
  );
}

function Button2() {
  const txtContent = "Hello";
  const btnType = "button";

  return (
    <button type={btnType} style={{ backgroundColor: "red", color: "white" }}>
      {txtContent}
    </button>
  );
}
