export function KeepingComponentsPure() {
  return (
    <>
      <h1>
        Keeping Components Pure - komponentleri saf fonksiyonlar olarak yazmak
      </h1>
      <TeaLatteRecipe personCount={2} />
      <CupSet />
      <CupSet2/>
    </>
  );
}

function double(num) {
  return 2 * num;
}

double(2);

let counter = 0;

function imPureFunc() {
  counter++;
  console.log(counter);
}

imPureFunc();
imPureFunc();

function TeaLatteRecipe({ personCount }) {
  return (
    <>
      <h2>{personCount} kişilik çay tarifi</h2>
      <ul>
        <li>{personCount} kişi için 1 ay kaşığı şeker</li>

        <li>{personCount} çay kaşığı süt</li>

        <li>{personCount} çay bardağı çay</li>
      </ul>
    </>
  );
}



function Cup({guest}) {
  console.log("Rendering Cup");
  return (
    <p>
      fincan #{guest} 
    </p>
  );
}


function CupSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />
    </>
  );
}

function CupSet2() {
  let cups = [];

  for (let i = 1; i < 10; i++) {
    cups.push(<Cup guest={i} />);
  }
  return (
    <>
    {cups}
    </>
  );
}
