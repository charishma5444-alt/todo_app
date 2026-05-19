import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask(""); // clear input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;