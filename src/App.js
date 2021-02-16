import "./App.css";
import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddItem from "./addItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ["cooking", "playing", "learning", "writing"],
      age: 30,
    };
  }

  onDelete(item) {
    var updateTodos = this.state.todos.filter((val, index) => item !== val);
    this.setState({
      todos: updateTodos,
    });
  }
  onAdd(item) {
    var updateTodos = this.state.todos;
    updateTodos.push(item);
    this.setState({
      todos: updateTodos,
    });
  }
  render() {
    setTimeout(
      function () {
        this.setState({
          age: 35,
        });
      }.bind(this),
      5000
    );
    var todos = this.state.todos;
    todos = todos.map((item, index) => (
      <TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)} />
    ));
    return (
      <div>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd.bind(this)}></AddItem>
      </div>
    );
  }
}

export default App;
