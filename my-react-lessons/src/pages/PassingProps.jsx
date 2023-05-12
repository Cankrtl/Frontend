export function PassingProps() {
  return (
    <>
      <h1>Passing props to a components - Bir komponente özellik geçirmek</h1>
      <Button btnClass="btn-sm" textContent="login" />
      <Button btnClass="btn-lg" textContent="buy" />
      <Button btnClass="btn-lg" textContent="ekle" />

      <h2>Kişi kartları</h2>
      <ul className="cardGrid">
        <Card
          title="Kart 1"
          description="Açıklama 1"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          borderColor="pink"
        />
        <Card
          title="Kart 2"
          description="Açıklama 2"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          borderColor="orange"
        />
        <Card
          title="Kart 3"
          description="Açıklama 3"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          borderColor="blue"
        />
        <Card
          title="Kart 4"
          description="Açıklama 4"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          borderColor="red"
        />
      </ul>
      <h2>Etiklet listesi</h2>
      <Label textContent="Etiket 1" backgroundColor="blue" />
      <Label textContent="Etiket 2" backgroundColor="red" />
      
      <h2>Rozetler</h2>
      <Rozet text= "Rozet-1"/>
      <Rozet text= "Rozet-2"/>
      <Rozet text= "Rozet-3"/>
      <Rozet text= "Rozet-4"/>
    </>
  );
}

function Button(props) {
  const textContent = props.textContent;
  const btnClass = props.btnClass;
  return (
    <button className={btnClass} type="button">
      {textContent}
    </button>
  );
}

function Card(props) {
  const cardStyles = { borderColor: props.borderColor };
  return (
    <li className="card" style={cardStyles}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
       <Avatar src={props.src} alt={props.title}/>
    </li>
  );
}

function Label(props) {
  const iconColor = { backgroundColor: props.backgroundColor };
  return (
    <a href="#" className="label">
      <span className="icon" style={iconColor}></span>
      {props.textContent}
    </a>
  );
}

function Rozet({text}){
  return(
    <div className="rozet">
      <p>{text}</p>
    </div>
  )
}

function Avatar(props){
  return(
    <img className="avatar" src={props.src} alt={props.alt}></img>
  )
}
/* spread operator */

function Profile(){
  const avatarProps = {src:"deneme", alt:"deneme"}
  return <Avatar/>;
}