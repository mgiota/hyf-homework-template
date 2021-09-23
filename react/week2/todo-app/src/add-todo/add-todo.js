import React, { useState } from 'react';

export default function AddTodoForm(props) {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const { addTodo } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(description, deadline);
    setDescription('');
    setDeadline('');
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Deadline:
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </label>
      <button>Add todo</button>
    </form>
    </>
  )
}