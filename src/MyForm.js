import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState(""); // state to hold input value

  const handleChange = (e) => {
    setName(e.target.value); // update state on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
