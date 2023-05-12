export function ConditionalRendering() {
  return (
    <>
      <h1>ConditionalRendering -koşulu render</h1>
      <BurakPackingList />
      <DogukanpackingList/>
      <TarkanPackeingList/>
    </>
  );
}

function BurakPackingList() {
  return (
    <>
      <h2>Burak'ın tatil için yanına alacakları</h2>
      <ul>
        <BurakPackingİtem item="şapka" isPacked={true} />
        <BurakPackingİtem item="havlu" isPacked={false} />
        <BurakPackingİtem item="şezlong" isPacked={true} />
        <BurakPackingİtem item="güneş gözlüğü" isPacked={false} />
      </ul>
    </>
  );
}

function BurakPackingİtem({ item, isPacked }) {
  if (isPacked) {
    return (
      <li>
        {item} <strong style={{ color: "limegreen" }}>ok </strong>
      </li>
    );
  }
  return <li>{item}</li>;
}

function DogukanpackingList() {
  return (
    <>
      Doğukanın tatil için yanına alacakları
      <ul>
        <DogukanItem item="Şort" isPacked={false} />
        <DogukanItem item="Güneş kremi" isPacked={true} />
        <DogukanItem item="Şapka" isPacked={false} />
      </ul>
    </>
  );
}

function DogukanItem({ item, isPacked }) {
  let liJsx = <li>{item}</li>;
  if (isPacked === true) {
    liJsx = <li>{item} ✓</li>;
  }
  return liJsx;
}

function TarkanPackeingList() {
  return (
    <>
      <h1>Tarkan'ın tatil için yanına alacakları</h1>
      <ul>
        <TarkanItem item="gitar" isPacked={false}/>
        <TarkanItem item="amfi" isPacked={true}/>
        <TarkanItem item="mikrofon" isPacked={false}/>
        <TarkanItem item="jole" isPacked={true}/>
      </ul>
    </>
  );
}

function TarkanItem(props){
  return (
    <li> {props.item} {props.isPacked && <span style={{color:"green"}}> ✓</span>}
    </li>
  )

}