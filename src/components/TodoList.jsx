const TodoList = ({ todos, deleteTodo }) => {
  if (todos.length === 0) {
    return <p>No tasks available!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;