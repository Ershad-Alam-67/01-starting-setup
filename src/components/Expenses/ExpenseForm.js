import "./ExpenseForm.css"
import React from "react"
const ExpenseForm = (props) => {
  let addItem = () => {
    let title = document.getElementById("title").value
    let amount = document.getElementById("amount").value
    let date = new Date(document.getElementById("date").value)
    let a = [...props.expenses, { title: title, amount: amount, date: date }]
    props.fun(a)
    props.set()
  }
  function show() {
    console.log(document.getElementById("title").value)
    console.log(document.getElementById("amount").value)
    console.log(document.getElementById("date").value)
  }
  return (
    <div className="main">
      <div className="inputs">
        <input
          id="title"
          onChange={show}
          type="text"
          placeholder="Enter Title"
        ></input>
        <input
          id="amount"
          onChange={show}
          type="number"
          placeholder="Enter Amount"
        ></input>
        <input
          id="date"
          onChange={show}
          type="date"
          placeholder="Enter Date"
        ></input>
      </div>
      <div className="btn">
        <button onClick={addItem}>Submit</button>
      </div>
    </div>
  )
}
export default ExpenseForm
