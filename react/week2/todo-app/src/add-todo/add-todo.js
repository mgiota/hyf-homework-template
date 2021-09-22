import React, { useState } from 'react';

export default function AddTodoForm(props) {
  const [value, setValue] = useState('');
  const { addTodo } = props;
  const onChange = (e) => {
    const value = e.target.value;
    console.log(`value: ${value}`);
    setValue(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Add todo:
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
      <button>Add todo</button>
    </form>
    </>
  )
}