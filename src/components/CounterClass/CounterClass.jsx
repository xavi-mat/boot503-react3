import React, { Component } from 'react'

export class CounterClass extends Component {
  constructor() {
    super()
    this.state = {
      initial: 0,
      counter: 0,
      increment: 1,
    }
  }
  increment = () => {
    this.setState({ counter: this.state.counter + this.state.increment });
  }
  decrement = () => {
    this.setState({ counter: this.state.counter - this.state.increment });
  }
  minusIncrement = () => {
    this.setState({ increment: this.state.increment - 1 })
  }
  plusIncrement = () => {
    this.setState({ increment: this.state.increment + 1 })
  }
  render() {
    return (
      <div className='container text-center'>
        <div>
          <button className='btn btn-primary' onClick={this.decrement}>
            ➖ {this.state.increment}
          </button>
          <span className='m-3 lead'>
            {this.state.counter}
          </span>
          <button className='btn btn-primary' onClick={this.increment}>
            ➕ {this.state.increment}
          </button>
        </div>
        <div>
          <button className='btn btn-primary' onClick={this.minusIncrement}>
            🔽
          </button>
          <span className='m-3 lead' style={{ "visibility": "hidden" }}>
            {this.state.counter}
          </span>
          <button className='btn btn-primary' onClick={this.plusIncrement}>
            🔼
          </button>
        </div>
      </div>
    )
  }
}

export default CounterClass