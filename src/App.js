import React, { Component } from "react";
import "./App.css";

import Validation from "./components/Validation/Validation";
import Cards from "./components/Cards/Cards";

class App extends Component {
  state = {
    userInput: ''
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCardHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updateText = text.join("");
    this.setState({ userInput: updateText });
  };

  render() {
    const cardList = this.state.userInput.split("").map((card, index) => {
      return (
        <Cards
          cards={card}
          key={index}
          clicked={() => this.deleteCardHandler(index)}
        />
      );
    });

    return (

      <div className="container">
        <h2>React task using conditional list, split, splice, join, map methods, key props, change component immutably</h2>
        <ol>
          <li>input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>component which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Render a list where each one receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a Card component, it should be removed from the entered text.</li>
        </ol>

        <input className="form-control"
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
          placeholder="Type Here.."
          >
          
             </input>
        <p> {this.state.userInput} </p>

        <Validation className="val" inputLength={this.state.userInput.length} />

        {cardList}
      </div>
    );
  }
}

export default App;
