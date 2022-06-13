import './RestHome.css';

function RestHome({ dishes }) {
  const dish = dishes.map(dish => (
    <div key={dish.id} className="card m-3 dish-card">
      <img class="card-img-top" src={dish.img} alt={dish.name}></img>
      <div className="card-header text-center lead">{dish.name}</div>
      <div className="card-body">{dish.description}</div>
      <div className="card-footer text-end">{dish.price} ¥</div>
    </div>
  ))
  return (
    <div className="container" >
      <div className="d-flex flex-wrap justify-content-center">
        {dish}
      </div>
    </div>
  )
}

export default RestHome