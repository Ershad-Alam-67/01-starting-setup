import React, { useState } from "react"

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/Expenses/NewExpense"

const App = () => {
  const expense = [
    {
      id: "0",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "1", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "3",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]
  function addExpenseHandler(s) {
    console.log(s)
  }
  const [expenses, setExpenses] = useState(expense)
  function sett(l) {
    setExpenses(l)
  }

  return (
    <div>
      <NewExpense
        expenses={expenses}
        fun={sett}
        onAddExpenseHandler={addExpenseHandler}
      />
    </div>
  )
}

export default App
