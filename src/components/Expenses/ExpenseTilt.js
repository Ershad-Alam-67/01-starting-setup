import Expenses from "./Expenses"
import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"

const ExpenseTilt = (props) => {
  let [showForm, setShowForm] = useState(false)
  const set = () => {
    showForm = !showForm
    setShowForm(showForm)
  }
  return (
    <div>
      {showForm ? (
        <ExpenseForm expenses={props.expenses} fun={props.fun} set={set} />
      ) : (
        <Expenses items={props.expenses} set={set} />
      )}
    </div>
  )
}
export default ExpenseTilt
