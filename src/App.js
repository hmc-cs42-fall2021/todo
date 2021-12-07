import React, { useState } from "react";
import TodoList from "./TodoList";
import InputBox from "./InputBox";

function App() {
  const initialItems = ["Task 1", "Task 2"];

  const [items, setItems] = useState(initialItems);

  function handleAddItem(task) {
    console.log(`Add ${task}`);
    setItems(items.concat(task));
  }

  function handleDeleteItem(task) {
    console.log(`Delete ${task}`);
    setItems(items.filter((t) => t !== task));
  }

  return (
    <div className="App container">
      <InputBox addItem={handleAddItem} />
      <TodoList tasks={items} deleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
