// https://64318e0d3adb1596516f1b61.mockapi.io/
import { FormAdd } from "./component/FormAdd";
import { ToDoItem } from "./component/ToDoItem";
import { useState, useEffect } from "react";
const apiUrl = "https://64318e0d3adb1596516f1b61.mockapi.io";
function App() {
  const [toDos, setToDos] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/todos`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setToDos(data);
      });
  }, []);

  function addToDo(newData) {
    fetch(`${apiUrl}/todos`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      setToDos([...toDos, newData]);
    });
  }

  function deleteToDo(id) {
    fetch(`${apiUrl}/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToDos(
        toDos.filter((item) => {
          if (item.id == id) {
            return false;
          } else {
            return true;
          }
        })
      );
    });
  }

  return (
    <div className="todo-app">
      <FormAdd onAdd={addToDo} />
      <ul>
        {toDos
          ? toDos.map((item) => {
              return (
                <ToDoItem key={item.id} item={item} onDelete={deleteToDo} />
              );
            })
          : ""}
      </ul>
    </div>
  );
}

export default App;
