import React from "react";

function TodoList({ tasks, deleteItem }) {
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>
          Todo items
          <span className="badge">{tasks.length}</span>
        </h4>
      </li>
      {tasks.map((task, idx) => (
        <li key={idx} className="collection-item">
          {task}
          <span className="secondary-content" onClick={() => deleteItem(task)}>
            <i className="material-icons">delete_forever</i>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
