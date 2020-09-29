import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  render() {
    const { title, deleteItem, editeItem } = this.props;
    return (
      <li
        className="list-group-item text-capitalize 
    d-flex justify-content-between my-2"
      >
        <h6>{title}</h6>
        <div className="todo-icon">
          <span onClick={editeItem} className="mx-2 text-success">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </span>
          <span onClick={deleteItem} className="mx-2 text-danger">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
