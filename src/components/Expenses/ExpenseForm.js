import "./ExpenseForm.css"
import React, { useState } from "react"
const ExpenseForm = (props) => {
  let addItem = () => {
    let title = document.getElementById("title").value
    let amount = document.getElementById("amount").value
    let date = new Date(document.getElementById("date").value)
    let a = [...props.expenses, { title: title, amount: amount, date: date }]
    props.fun(a)
    props.set()
  }
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")
  function updateTitle() {
    setEnteredTitle(document.getElementById("title").value)
  }
  function updateAmount() {
    setEnteredAmount(document.getElementById("amount").value)
  }
  function updateDate() {
    setEnteredDate(document.getElementById("date").value)
  }

  return (
    <div className="main">
      <div className="inputs">
        <input
          id="title"
          onChange={updateTitle}
          type="text"
          placeholder="Enter Title"
        ></input>
        <input
          id="amount"
          onChange={updateAmount}
          type="number"
          placeholder="Enter Amount"
        ></input>
        <input
          id="date"
          onChange={updateDate}
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
