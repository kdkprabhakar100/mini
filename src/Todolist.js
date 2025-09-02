import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React basics", done: true },
    { id: 2, task: "Build a counter app", done: true },
    { id: 3, task: "Make a todo list", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTodo = { id: Date.now(), task: newTask, done: false };
    setTodos([...todos, newTodo]);
    setNewTask(""); // clear input
  };

  // Toggle task done/undone
  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", margin: "1rem" }}>
      <h2>Todo List ✅</h2>

      {/* Input field */}
      <input
        type="text"
        value={newTask}
        placeholder="Enter a new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {/* Task list */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTask(todo.id)}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.task} {todo.done ? "✅" : "❌"}
          </li>
        ))}
      </ul>

      {/* Conditional rendering */}
      {todos.every((t) => t.done) ? (
        <p>🎉 All tasks completed!</p>
      ) : (
        <p>❌ You still have tasks.</p>
      )}
    </div>
  );
}

export default TodoList;
