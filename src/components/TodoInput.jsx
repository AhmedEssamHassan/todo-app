import React, { Component } from "react";

class TodoInput extends Component {
  state = {};
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" aria-hidden="true"></i>
              </div>
            </div>
            <input
              onChange={handleChange}
              value={item}
              type="text"
              className="text-capitalize form-control"
              placeholder="add a todo item"
            />
          </div>
          {editItem ? (
            <button
              type="submit"
              className="alert-success mt-3 text-capitalize btn btn-block"
            >
              edit item
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary mt-3 text-capitalize btn btn-block"
            >
              add item
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default TodoInput;
