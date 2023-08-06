import React from "react"
import ExpenseItem from "./compo/ExpenseItem"

function App() {
  const expenseItems = []

  for (let i = 0; i <= 100; i++) {
    expenseItems.push(<ExpenseItem key={i} LocationOfExpenditure="Delhi" />)
  }

  return (
    <div>
      <ExpenseItem LocationOfExpenditure="Delhi" /> {/* Single instance */}
      {expenseItems} {/* Array of ExpenseItem instances */}
    </div>
  )
}

export default App
