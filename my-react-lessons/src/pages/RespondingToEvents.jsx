export function RespondingToEvents() {
  return (
    <>
      <h1>Responding to events - Event'lere yanıt vermek</h1>

      <Button1 />

      <Button2 />

      <AlertButton message="Şarkı Çalınıyor">Oynat</AlertButton>

      <AlertButton message="Duraklatıldı">Durdur</AlertButton>

      <ToolBar />

      <Form/>
    </>
  );
}

const Button1 = () => {
  function handleClick(e) {
    alert("hello");
  }

  return (
    <button type="button" onClick={handleClick}>
      Deneme
    </button>
  );
};

function Button2() {
  return (
    <button
      type="button"
      onClick={(e) => {
        alert("Hello");
      }}
    >
      Button 2
    </button>
  );
}

function AlertButton({ message, children }) {
  function handleClick(e) {
    alert(message);
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

function BaseButton({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function UploadButton() {
  return (
    <BaseButton
      onClick={(e) => {
        alert("Dosyalar yükleniyor");
      }}
    >
      {" "}
      Upload{" "}
    </BaseButton>
  );
}

function PlayButton({ movie }) {
  return (
    <BaseButton
      onClick={(e) => {
        alert(`${movie} oynatılıyor...`);
      }}
    >
      {" "}
      Filmi Oynat{" "}
    </BaseButton>
  );
}

const ToolBar = () => {
  const toolBarStyle = {
    backgroundColor: "#eee",
    padding: "8px",
    borderRadius: "8px",
    marginTop: "8px",
  };

  return (
    <nav
      style={toolBarStyle}
      onClick={() => {
        alert("Ben toolbar");
      }}
    >
      <UploadButton />

      <PlayButton movie="Matrix" />
    </nav>
  );
};

function Form(){
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input type="text"/>
           <button type="submit"> Gönder</button>
        </form>
    )
}