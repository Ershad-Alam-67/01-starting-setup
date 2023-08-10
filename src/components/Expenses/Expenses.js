import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseForm from "./ExpenseForm"

const Expenses = (props) => {
  function handleDeleteExpense(id) {
    const updatedItems = itemss.filter((expense) => expense.id !== id)
    setItem(updatedItems)
  }

  return (
    <div>
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
            onDelete={handleDeleteExpense}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
