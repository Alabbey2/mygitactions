import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import NavBar from './component/NavBar';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'go jogging'},
      {id:2, content: 'call friends'}
    ]
  }
  deleteTodo =(id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="todo -app container">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <h1 className="center red-text">Todos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> 
          <AddTodo addTodo={this.addTodo}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;