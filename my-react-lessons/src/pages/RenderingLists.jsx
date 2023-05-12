import { v4 as uuidv4 } from 'uuid';

const veryFamousPeople = [
  {id:0, name: "John Wick", profession: "Suikast Uzmanı", imgUrl: "https://i.imgur.com/6WvWYZL.jpeg" },
  {id:1, name: "Jason Statham", profession: "Suikast Uzmanı", imgUrl:"https://i.imgur.com/lICfvbD.jpg"},
  {id:2, name: "Einstein", profession: "Bilim İnsanı", imgUrl:"https://i.imgur.com/U1ZWTBK.jpeg"},
  {id:3, name: "Marie Curle", profession: "Bilim İnsanı", imgUrl:"https://i.imgur.com/MK3eW3Am.jpg"},
  {id:4, name: "Tarkan", profession: "Pop Star", imgUrl:"https://i.imgur.com/fFVFX7q.jpeg"},
  {id:5, name: "Ajda Pekkan", profession: "Pop Star", imgUrl:"https://i.imgur.com/lICfvbD.jpg"},
];

export function RenderingLists() {
 

  return (
    <>
      <h1>Rendering Lists(liste render etmek)</h1>

      <VeryFamousPeopleList/>
      <VeryFamousAssassins/>
    </>
  );
}

function VeryFamousPeopleList(){
    const listJsx = veryFamousPeople.map((person)=>{
        return <li key={uuidv4()}><img className="avatar" src={person.imgUrl} />{person.name}, meslek:{person.profession}</li>;
    });
   
    return(
        <>
        <h2>Çok ünlü insanların listesi 1</h2>
        <ul>
            {listJsx}
        </ul>
        </>
    )
}


function VeryFamousAssassins(){
    const list = veryFamousPeople
    .filter((person)=>person.profession === "Suikast Uzmanı")
    .map((person, index)=><li key={person.id}>{person.name} meslek:{person.profession}</li>)
    
    return(
        <>
        <h2>Çok ünlü Suikastçiler</h2>
        <ul>
            {list}
        </ul>
        </>
    )
}






