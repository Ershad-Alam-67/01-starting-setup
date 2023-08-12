import "./ExpenseForm.css"
import React, { useState } from "react"
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")
  function updateTitle(event) {
    setEnteredTitle(event.target.value)
  }
  function updateAmount(event) {
    setEnteredAmount(event.target.value)
  }
  function updateDate(event) {
    setEnteredDate(event.target.value)
  }
  const obj = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
    id: Math.random(),
  }

  function addItem() {
    props.set((pre) => {
      const ob = [...pre, obj]

      return ob
    })
    props.onAddExpenseHandler(obj)
    setEnteredAmount("")
    setEnteredDate("")
    setEnteredTitle("")
    props.onSetFormShow()
  }

  function fun(eve) {
    eve.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
  }

  return (
    <form onSubmit={fun}>
      <div className="main">
        <div className="inputs">
          <input
            id="title"
            onChange={updateTitle}
            value={enteredTitle}
            type="text"
            placeholder="Enter Title"
          ></input>
          <input
            id="amount"
            onChange={updateAmount}
            type="number"
            value={enteredAmount}
            placeholder="Enter Amount"
          ></input>
          <input
            id="date"
            onChange={updateDate}
            type="date"
            value={enteredDate}
            placeholder="Enter Date"
          ></input>
        </div>
        <div className="btn">
          <button id="cancel" className="btns" onClick={props.onSetFormShow}>
            Cancel
          </button>
          <button id="submit" className="btns" type="submit" onClick={addItem}>
            Add Item
          </button>
        </div>
      </div>
    </form>
  )
}
export default ExpenseForm
