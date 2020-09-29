import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
  };

  handleClear = () => {
    this.setState({ items: [] });
  };

  handleDelete = (key) => {
    const filterItems = this.state.items.filter((item) => {
      return item.id !== key;
    });
    this.setState({ items: filterItems });
  };

  handleEdite = (key) => {
    const filterdItems = this.state.items.filter((item) => {
      return item.id !== key;
    });

    const selectedItem = this.state.items.find((item) => {
      return item.id === key;
    });

    this.setState({
      items: filterdItems,
      item: selectedItem.item,
      id: key,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todi input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              handleEdite={this.handleEdite}
              handleDelete={this.handleDelete}
              clear={this.handleClear}
              items={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
