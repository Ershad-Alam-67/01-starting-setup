import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter.js"
import ChartBox from "./Chart/ChartBox"

const Expenses = (props) => {
  let im = "./hero.png"
  function handleDeleteExpense(id) {
    const updatedItems = itemss.filter((expense) => expense.id !== id)
    setItem(updatedItems)
  }
  const [filteredYear, setFilteredYear] = useState("All")

  const [filteredExpenses, setFilteredExoenses] = useState([])

  function getNumberOfExpense() {
    let ar = props.items.filter(filt).map((expense) => expense)
    return ar.length
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filt = (a) => {
    if (filteredYear == "All") return true
    if (a.date.getFullYear() == filteredYear) return true
    return false
  }
  const filteredExpensesList = props.items
    .filter(filt)
    .map((expense) => expense)
  console.log("he", filteredExpensesList)
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ChartBox getList={filteredExpensesList} />
        {getNumberOfExpense() === 0 ? (
          <p>no expense there!</p>
        ) : (
          props.items
            .filter(filt)
            .map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                id={expense.id}
                onDelete={handleDeleteExpense}
              />
            ))
        )}
        {getNumberOfExpense() === 1 ? (
          <p>Only single Expense here. Please add more...</p>
        ) : null}
      </Card>
    </div>
  )
}

export default Expenses
