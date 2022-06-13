import React, { Component } from 'react'

export class CounterClass extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>CounterClass</div>
    )
  }
}

export default CounterClass