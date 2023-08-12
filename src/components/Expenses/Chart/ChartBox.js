import React from "react"
import "./ChartBox.css"
import ChartBar from "./ChartBar"
const ChartBox = (props) => {
  const value = props.getList.map((expense) => expense.amount)
  const map = new Map()
  console.log(props.getList)
  props.getList.forEach((element) => {
    if (map.has(element.date.getMonth())) {
      map.set(
        element.date.getMonth(),
        map.get(element.date.getMonth()) + element.amount
      )
    } else {
      map.set(element.date.getMonth(), element.amount)
    }
  })
  console.log("kk", map)
  const valArray = Array.from(map.values())
  const maxVal = Math.max(...valArray)

  const barObject = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "De",
  }
  console.log(map.get(7))
  function heightCalc(i) {
    const a = map.get(i) * 130
    if (map.get(i) * 130) {
      return Math.floor((map.get(i) * 130) / maxVal)
    }
    return 0
  }
  return (
    <div className="chart-box">
      {Object.keys(barObject).map((key, i) => (
        <ChartBar
          key={barObject[key]}
          label={barObject[key]}
          height={heightCalc(i)}
        />
      ))}
    </div>
  )
}

export default ChartBox
