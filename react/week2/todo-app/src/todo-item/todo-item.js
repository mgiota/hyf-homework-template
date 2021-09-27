import React, { useState } from 'react';
import FancyBorder from '../fancy-border/fancy-border';

export default function TodoItem(props) {;
  const { todo, toggleTodo, deleteTodo, updateTodo} = props;
  const [editMode, setEditMode] = useState(false);
  const isCompleted = todo.completed;
  const [newDescription, setDescription] = useState(todo.description)
  
  const editTodo = () => {
    updateTodo(newDescription);
    setEditMode(!editMode);
  }

  const enterEditMode = () => {
    setEditMode(!editMode);
  }
  return (
    <FancyBorder>
      <li>
        { editMode
          ?
          <input value={newDescription} onChange={(e) => setDescription(e.target.value)} />
          :
          <label style={isCompleted ? { textDecoration: 'line-through' } : {}} htmlFor="completeTodo">{todo.description}</label>  

        }
        &nbsp;| {todo.deadline}
        <input 
          name="completeTodo"
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
        />
        { editMode 
          ?
          <button onClick={editTodo}>Update</button>
          :
          <button onClick={enterEditMode}>Edit</button>
        }
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    </FancyBorder>
  );
}