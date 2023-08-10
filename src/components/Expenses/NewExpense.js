import Expenses from "./Expenses"
import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  return (
    <div>
      <ExpenseForm
        set={props.fun}
        onAddExpenseHandler={props.onAddExpenseHandler}
      />
      <Expenses items={props.expenses} set={props.fun} />)
    </div>
  )
}
export default NewExpense
