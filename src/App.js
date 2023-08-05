import ExpenseItem from "./compo/ExpenseItem"
import Item from "./compo/Item"
function App() {
  return (
    <div>
      <ExpenseItem></ExpenseItem>
      <Item name="Food" expense="10"></Item>
      <Item name="Petrol" expense="100"></Item>
      <Item name="Movies" expense="200"></Item>
    </div>
  )
}

export default App
