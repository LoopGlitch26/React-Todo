import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Welcome to my Todo app, made using ReactJS'},
      {id: 2, content: 'You can delete each todo by clicking on it'},
      {id: 3, content: 'Now you are all set to get started!!'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = ( todo ) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">LoopGlitch's Todo App</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;