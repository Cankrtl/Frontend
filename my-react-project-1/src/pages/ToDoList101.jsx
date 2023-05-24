import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export function ToDoList101() {
  return (
    <>
      <SimpleToDos />
      <ToDoAdvanced />
    </>
  );
}

function SimpleToDos() {
  const [list, setList] = useState([]);
  const [itemContent, setItemContent] = useState("");

  function handleFrmSubmit(e) {
    e.preventDefault();
    if (itemContent.length < 3) return;
    setList([...list, <li>{itemContent}</li>]);
  }

  function handleItemcontent(e) {
    setItemContent(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleFrmSubmit}>
        <h1>Yapılacaklar listesi</h1>
        <input
          type="text"
          placeholder="yapılması gereken bir şey ekle"
          onChange={handleItemcontent}
          value={itemContent}
        />
        <button type="submit">Ekle</button>
      </form>
      <ol>{list}</ol>
    </>
  );
}

const DATA_TODOS = [
  { id: 0, content: "17.00 - Spor Yap", completed: true },
  { id: 1, content: "19.00 - Bulaşıklar Yıkanacak", completed: false },
];

function ToDoAdvanced() {
  const [newcontent, setNewContent] = useState("");
  const [list, setList] = useState(DATA_TODOS);

  function handleNewContentChange(e) {
    setNewContent(e.target.value);
  }

  function handleFrmSubmit(e) {
    e.preventDefault();
    if (newcontent.length < 3) return;
    setList([...list, { id: uuidv4(), content: newcontent, completed: false }]);
    setNewContent("");
  }

  function handleDeleteItem(id) {
    const modified = list.filter((item) => item.id !== id);
    setList(modified);
  }

  function handleComplitedChange(id) {
    const modifiedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    setList(modifiedList);
  }

  return (
    <>
      <form onSubmit={handleFrmSubmit}>
        <h1>Yapılacaklar listesi</h1>
        <input
          type="text"
          placeholder="yapılması gereken bir şey ekle"
          onChange={handleNewContentChange}
          value={newcontent}
        />
        <button type="submit">Ekle</button>
      </form>
      <ol>
        {list.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => {
                handleComplitedChange(item.id);
              }}
            />
            {item.content}{" "}
            <button
              type="button"
              onClick={(e) => {
                handleDeleteItem(item.id);
              }}
            >
              Sil
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
