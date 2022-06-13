import React, { Component } from 'react'

export class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.valorInicial,
    };
  }
  incrementar = () => {
    // this.state.counter++;
    this.setState({ counter: this.state.counter + 1 })
    console.log(this.state.counter)
  }
  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    )
  }
}

export default CounterClass