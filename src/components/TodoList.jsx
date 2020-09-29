import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  state = {};
  render() {
    const { items, clear, handleDelete, handleEdite } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              editeItem={() => handleEdite(item.id)}
              deleteItem={() => handleDelete(item.id)}
              key={item.id}
              title={item.item}
            />
          );
        })}

        <button
          onClick={clear}
          type="button"
          className="btn btn-danger btn-block
        text-capitalize mt-5"
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
