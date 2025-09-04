import { useState } from "react";

function Formfull() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subscribe: false,
    gender: "",
    country: "Nepal",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={form.subscribe}
          onChange={handleChange}
        />
        Subscribe
      </label>

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <select name="country" value={form.country} onChange={handleChange}>
        <option value="Nepal">Nepal</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
export default Formfull;
