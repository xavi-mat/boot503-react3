import React, { Component } from 'react'

export class RestDishClass extends Component {
  render() {
    const {img, name, description, price} = this.props;
    return (
        <div className="card m-3 dish-card">
        <img className="card-img-top" src={img} alt={name}></img>
        <div className="card-header text-center lead">{name}</div>
        <div className="card-body">{description}</div>
        <div className="card-footer text-end">{price} ¥</div>
      </div>
    )
  }
}

export default RestDishClass