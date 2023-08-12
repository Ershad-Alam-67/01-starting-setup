import Expenses from "./Expenses"
import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
import ChartBox from "./Chart/ChartBox"

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(false)

  const updateFormShow = () => {
    setFormShow(true)
  }
  const updateFormShow2 = () => {
    setFormShow(false)
  }

  return (
    <div>
      {formShow && (
        <ExpenseForm
          set={props.fun}
          onAddExpenseHandler={props.onAddExpenseHandler}
          onSetFormShow={updateFormShow2}
        />
      )}

      {!formShow && (
        <div className="btn">
          <button id="addExpense" onClick={updateFormShow}>
            Add Expense
          </button>
        </div>
      )}

      <Expenses items={props.expenses} set={props.fun} />
    </div>
  )
}

export default NewExpense
