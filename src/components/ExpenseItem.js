import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails"

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
    </div>
  )
}

export default ExpenseItem
