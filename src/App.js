import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      hobbies: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.name} ${this.state.age} ${this.state.hobbies}`);
    this.setState({
      name: "",
      age: "",
      hobbies: "",
    });
  };

  // console.log()
  //
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="age"
              value={this.state.age}
              name="age"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="hobbies"
              value={this.state.hobbies}
              onChange={this.handleChange}
              name="hobbies"
            />
            <button type="submit">Submit Form</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
