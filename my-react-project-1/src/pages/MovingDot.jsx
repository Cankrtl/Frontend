import { useState, useTransition } from "react";

export function MovingDot() {
  // const [mouseX, setMouseX] = useState(null);
  // const [mouseY, setMouseY] = useState (null);

  const [positions, setPositions] = useState({ x: 0, y: 0 });

  function handlePointerMove(e) {
    // console.log(e.clientX, e.clientY);
    setPositions({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: 200,
          height: 250,
          position: "relative",
        }}
        onPointerMove={handlePointerMove}
      >
        {positions.x.toFixed() - 37} {positions.y.toFixed() - 230}
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "red",
            borderRadius: "50%",
            position: "absolute",
            top: positions.y - 230,
            left: positions.x - 37,
          }}
        ></span>
      </div>
      <UserForm />
    </>
  );
}

function UserForm() {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  function handleFirstName(e) {
    // user.firstName = e.target.value  //motation
    setUser({ ...user, firstName: e.target.value });
  }

  function handleLastName(e) {
    // user.lastName = e.target.value  //motation
    setUser({ ...user, lastName: e.target.value });
  }

  function handleEmail(e) {
    // user.email = e.target.value    //motation

    setUser({ ...user, email: e.target.value });
  }

  return (
    <form style={{ width: 200, marginTop: 32 }}>
      <input type="text" placeholder="Adinız" onChange={handleFirstName} />
      <input type="text" placeholder="Soyadınız" onChange={handleLastName} />
      <input
        type="text"
        placeholder="Eposta adresiniz"
        onChange={handleEmail}
      />

      <p>
        Tam Ad: {user.firstName} {user.lastName}
      </p>
      <p>Kullanıcı: e-posta: {user.email}</p>
    </form>
  );
}
