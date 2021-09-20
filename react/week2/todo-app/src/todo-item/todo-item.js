export default function TodoItem(props) {;
  const { todo, toggleTodo, deleteTodo} = props;
  console.log(todo)
  return (
    <li>
      { todo.completed 
        ? 
        <label style={{textDecoration: 'line-through'}} htmlFor="completeTodo">{todo.description}</label>
        :
        <label htmlFor="completeTodo">{todo.description}</label>

      }
      <input 
        name="completeTodo"
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
      />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}