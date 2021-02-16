import React, { Component } from "react";

class addItem extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" required ref="newItem"></input>
        <input type="submit" value="hit me"></input>
      </form>
    );
  }
}

export default addItem;
