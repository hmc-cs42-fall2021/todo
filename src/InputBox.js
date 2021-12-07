import { useState } from "react";

function InputBox({ addItem }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addItem(value);
    setValue("");
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="new-item">Add an item</label>
      </form>
    </div>
  );
}

export default InputBox;
