import React, { Component } from 'react'
import RestDishClass from './RestDishClass/RestDishClass';

export class RestHomeClass extends Component {
  render() {
    const dish = this.props.dishes.map(dish => (
      <RestDishClass key={dish.id} {...dish} />
    ));
    return (
      <div className="container" >
        <div className="d-flex flex-wrap justify-content-center">
          {dish}
        </div>
      </div>
    )
  }
}

export default RestHomeClass