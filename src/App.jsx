import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete React homework', completed: false },
    { id: 2, text: 'Design UI for Grand Test', completed: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Handle adding a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo item
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        {/* Section 1: Header */}
        <header className="todo-header">
          <h1>Task Planner</h1>
          <p>Streamline your day, one task at a time.</p>
        </header>

        {/* Section 2: Styled Form Section */}
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="todo-add-btn">
            Add Task
          </button>
        </form>

        {/* Section 3: Todo List UI Design */}
        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks left! Enjoy your day.</p>
          ) : (
            todos.map((item) => (
              <div
                key={item.id}
                className={`todo-item ${item.completed ? 'completed' : ''}`}
              >
                <div className="todo-item-left" onClick={() => toggleComplete(item.id)}>
                  <span className="todo-checkbox"></span>
                  <span className="todo-text">{item.text}</span>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="todo-delete-btn"
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
