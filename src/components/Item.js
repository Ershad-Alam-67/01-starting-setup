function Item(props) {
  return (
    <div>
      <p>{props.name + " Rs " + props.expense}</p>
    </div>
  )
}
export default Item
