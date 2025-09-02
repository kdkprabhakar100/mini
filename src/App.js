import Counter from "./counter";
import TodoList from "./Todolist";
function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Day 2: State & Events</h1>
      <Counter />
      <h2>day 3: lists and conditional rendering</h2>
      <TodoList />
    </main>
  );
}

export default App;
