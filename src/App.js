import React from "react";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <form>
          <input type="text" />
          <label htmlFor="new-item">Add an item</label>
        </form>
      </div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>
            Todo items
            <span className="badge">2</span>
          </h4>
        </li>
        <li className="collection-item">Item 1</li>
        <li className="collection-item">Item 2</li>
      </ul>
    </div>
  );
}

export default App;
