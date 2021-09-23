import React from 'react';
import TodoItem from './todo-item/todo-item';
import AddTodoForm from './add-todo/add-todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Cook',
          completed: false,
          deadline: '2019/02/04'
        },
        {
          id: 2,
          description: 'Clean',
          completed: false,
          deadline: '2021/09/03'
        }
      ]
    };

    // this.addTodo = this.addTodo.bind(this);
  }

  addTodo = (description, deadline) => {
    const  generateId = () => {
      const latestId = this.state.todos[this.state.todos.length - 1].id;
      return latestId + 1;
    }
    const newItem = { id: generateId(), description, completed: false, deadline};
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

  updateTodo(id, newDescription) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, description: newDescription}
      } else {
        return todo
      }
    });
    this.setState({ todos: updatedTodos})
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm 
          addTodo={this.addTodo} 
        />
        <ul>
          { this.state.todos.map(todo => 
            <TodoItem 
              key={todo.id}
              todo={todo} 
              deleteTodo={() => this.deleteTodo(todo.id)}
              toggleTodo={() => this.toggleTodo(todo.id)}
              updateTodo={(newDescription) => this.updateTodo(todo.id, newDescription)}
            />)}
        </ul>
      </div>
    );
  }
}

export default App;
