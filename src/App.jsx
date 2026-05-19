import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Fetch initial todos from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), title: task };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <TodoForm addTodo={addTodo} />
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;