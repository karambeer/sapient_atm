import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: 0, result: {}, totalCount: 0 }
  }

  updateInput(event) {
    let value = event.target.value;
    this.setState({ input: value });
  }

  updateResultAndInput(inputValue, result, noteValue) {
    if (inputValue >= noteValue) {
      let newInput = inputValue % noteValue;
      let dividorAmount = inputValue - newInput;
      let count = dividorAmount / noteValue;
      this.setState((state, props) => ({
        totalCount: state.totalCount + count
      }));
      result[noteValue] = count;
      return newInput;
    } else {
      result[noteValue] = 0;
      return inputValue;
    }
  }

  calculate() {
    this.setState({ totalCount: 0 });
    let inputValue = this.state.input;
    let result = {};
    let newInput = this.updateResultAndInput(inputValue, result, 2000);
    newInput = this.updateResultAndInput(newInput, result, 500);
    newInput = this.updateResultAndInput(newInput, result, 200);
    newInput = this.updateResultAndInput(newInput, result, 100);
    newInput = this.updateResultAndInput(newInput, result, 50);
    newInput = this.updateResultAndInput(newInput, result, 20);
    newInput = this.updateResultAndInput(newInput, result, 10);
    newInput = this.updateResultAndInput(newInput, result, 5);
    newInput = this.updateResultAndInput(newInput, result, 2);
    newInput = this.updateResultAndInput(newInput, result, 1);

    this.setState({ result: result });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>ATM Money Dispenser</h2>
        </header>
        <div className="App-content">
          <UserInput change={(val) => this.updateInput(val)} calculate={() => this.calculate()} />
          <UserOutput notes={this.state.result} total={this.state.totalCount} />
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default App;
