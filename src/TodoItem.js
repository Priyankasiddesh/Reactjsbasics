import React, { Component } from "react";
import "./todoItem.css";
class TodoItem extends React.Component {
  handleDelete() {
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <li>
        {" "}
        <div>
          <span classNme="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete.bind(this)}>
            x
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
