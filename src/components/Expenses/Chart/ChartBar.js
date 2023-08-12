import React from "react"
import "./ChartBar.css"
const ChartBar = (props) => {
  const obj = {
    backgroundColor: "black",
  }

  const style = {
    height: 130 - props.height,
  }
  const style2 = {
    height: props.height,
  }

  return (
    <div className="chart-item">
      <div className="chart-bar" style={obj}>
        <div className="chart-meter1" style={style}></div>
        <div className="chart-meter2" style={style2}></div>
      </div>
      <p>{props.label}</p>
    </div>
  )
}

export default ChartBar
