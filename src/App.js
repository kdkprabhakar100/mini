import Counter from "./counter";
import TodoList from "./Todolist";
import RandomUser from "./RandomUser";
import MyForm from "./MyForm";
function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Day 2: State & Events</h1>
      <Counter />
      <h2>day 3: lists and conditional rendering</h2>
      <TodoList />
      <h1>Day 4: useEffect & API Fetching</h1>
      <RandomUser />
      <h1>Day 5: forms and controlled components</h1>
      <MyForm />
    </main>
  );
}

export default App;
