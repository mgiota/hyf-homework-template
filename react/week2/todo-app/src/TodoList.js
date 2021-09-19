import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Cook',
          completed: false
        },
        {
          id: 2,
          description: 'Clean',
          completed: false
        }
      ]
    };

    // this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const  generateId = () => {
      const latestId = this.state.todos[this.state.todos.length - 1].id;
      return latestId + 1;
    }
    const newItem = { id: generateId(), description: 'Gym', completed: false};
    let newItems = this.state.todos.concat(newItem);
    this.setState({
      todos: newItems
    });
  }

  // onClick={this.addTodo}
  // addTodo = () => {
  //   const newItem = { text: "Gym" };
  //   this.setState({
  //     todos: [...this.state.todos, newItem]
  //   })
  // }

  deleteTodo(id) {
    console.log(id)
    const remainingTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: remainingTodos
    });
  }

  toggleTodo(id) {
    const todos = this.state.todos;
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.addTodo()}>Add todo</button>
        <ul>
          { this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                { todo.completed 
                  ? 
                  <label style={{textDecoration: 'line-through'}} htmlFor="completeTodo">{todo.description}</label>
                  :
                  <label htmlFor="completeTodo">{todo.description}</label>

              }
                <input 
                  name="completeTodo"
                  type="checkbox"
                  onChange={() => this.toggleTodo(todo.id)}
                />
                <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
  
}

export default TodoList;