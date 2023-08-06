import "./ExpenseItem.css"
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>Aug 06 2023</div>
      <div className="expense-item__description">
        <h1>Car Insurance</h1>
        <div className="expense-item__price">$200</div>
        <div>{props.LocationOfExpenditure}</div>
      </div>
    </div>
  )
}
export default ExpenseItem
