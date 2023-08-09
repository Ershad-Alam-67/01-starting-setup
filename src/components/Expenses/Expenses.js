import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseForm from "./ExpenseForm"

const Expenses = (props) => {
  const [itemss, setItem] = useState(props.items)

  function handleDeleteExpense(id) {
    const updatedItems = itemss.filter((expense) => expense.id !== id)
    setItem(updatedItems)
  }

  return (
    <div>
      <Card className="expenses">
        {itemss.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
            onDelete={handleDeleteExpense}
          />
        ))}

        <button id="btn" className="" onClick={props.set}>
          Add Expense
        </button>
      </Card>
    </div>
  )
}

export default Expenses
