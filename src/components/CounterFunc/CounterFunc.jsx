import { useState } from "react"
import './CounterFunc.css'

const MAX_POS = { x: 578, y: 378 }

function CounterFunc() {

  const [active, setActive] = useState(false);
  const [speed, setSpeed] = useState(0.1);
  const [accel, setAccel] = useState(0.1);
  const [pos, setPos] = useState({ x: 300, y: 200 })
  const [direction, setDirection] = useState({x: 1, y: 1});

  const speedUp = () => { setSpeed(speed + accel) }
  const speedDown = () => { setSpeed(speed - accel) }
  const accelUp = () => { setAccel(accel + 0.1) }
  const accelDown = () => { setAccel(accel - 0.1) }
  const resetAll = () => {
    setSpeed(0.1);
    setAccel(0.1);
    setActive(false);
  }
  const onChangeX = (ev) => {
    setPos({ x: Number(ev.target.value), y: pos.y })
  };
  const onChangeY = (ev) => {
    setPos({ x: pos.x, y: Number(ev.target.value) })
  };
  setTimeout(() => {
    if (!active) return;
    const posX = pos.x + (speed * direction.x);
    const posY = pos.y + (speed * direction.y);

    if (posX >= MAX_POS.x) setDirection({x: -direction.x, y: direction.y})
    if (posY >= MAX_POS.y) setDirection({x: direction.x, y: -direction.y})
    if (posX <= 0) setDirection({x: -direction.x, y: direction.y})
    if (posY <= 0) setDirection({x: direction.x, y: -direction.y})

    setPos({ x: posX, y: posY })
    repositionRocket();
  }, 100)

  function repositionRocket() {
    document.getElementById('rocket').style.top = pos.y + 'px';
    document.getElementById('rocket').style.left = pos.x + 'px';
  }
  function playIt() {
    setActive(true);
  }

  return (
    <>
      <div className="rocket-space container">
        <div id="rocket" className="rocket">🚀</div>
      </div>
      <div className="control-panel">
        <div className="control-block">
          <input type="number" size="5" value={pos.x.toFixed(0)} onChange={onChangeX} disabled={active} />
          <input type="number" size="5" value={pos.y.toFixed(0)} onChange={onChangeY} disabled={active} />
          <button onClick={repositionRocket}>✥</button>
        </div>
        <div className="control-block">
          <button onClick={playIt}>▶️</button>
          <button onClick={resetAll}>⏹️</button>
        </div>
        <div className="control-block">
          <button onClick={speedDown} disabled={!active}>⬇️</button>
          {speed.toFixed(1)}
          <button onClick={speedUp} disabled={!active}>⬆️</button>
        </div>
        <div className="control-block">
          <button onClick={accelDown} disabled={!active}>⏪</button>
          {accel.toFixed(1)}
          <button onClick={accelUp} disabled={!active}>⏩</button>
        </div>
      </div>
    </>
  )
}

export default CounterFunc