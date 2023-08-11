import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter.js"

const Expenses = (props) => {
  function handleDeleteExpense(id) {
    const updatedItems = itemss.filter((expense) => expense.id !== id)
    setItem(updatedItems)
  }
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filt = (a) => {
    if (a.date.getFullYear() == filteredYear) return true
    return false
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.filter(filt).map((expense) => (
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
