import { useState } from "react"
import './Asteroids.css'

const MAX_POS = { x: 578, y: 378 }

function Asteroids() {

  const [posX, setPosX] = useState(300);
  const [posY, setPosY] = useState(200);
  const [rota, setRota] = useState(45);
  const [speedX, setSpeedX] = useState(0);
  const [speedY, setSpeedY] = useState(0);

  const rotateRight = () => {
    let rotaTemp = rota + 5;
    while (rotaTemp > 360) {
      rotaTemp -= 360;
    }
    setRota(rotaTemp);
    document.querySelector('#rocket2').style.rotate = rotaTemp + 'deg';
  }
  const rotateLeft = () => {
    let rotaTemp = rota - 5;
    while (rotaTemp < 0) {
      rotaTemp += 360
    }
    setRota(rotaTemp);
    console.log(rota)
    document.querySelector('#rocket2').style.rotate = rotaTemp + 'deg';
  }

  return (
    <div className="my-5">
      <div className="rocket-space container">
        <div id="rocket2" className="rocket">🚀</div>
      </div>
      <div className="control-panel">
        <div className="control-block">
          <button className="btn btn-primary mx-2" onClick={rotateLeft}>⏪</button>
          <button className="btn btn-primary mx-2">🔼</button>
          <button className="btn btn-primary mx-2" onClick={rotateRight}>⏩</button>
        </div>
      </div>
    </div>
  )
}

export default Asteroids