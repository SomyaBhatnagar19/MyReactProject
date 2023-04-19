import "./ExpenseItem.css";
function ExpenseItems(props) {
  // const LocationOfExpenditure = ['food','petrol','movie']
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    // <div className="box">
    <div className="items">
      <div className="date">
        {/* <h2>{props.date.toISOString()}</h2> */}
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        <div className="Title">
          <h2>{props.title}</h2>
        </div>
        <div className="rate">
          <h2>Rs. {props.amount}</h2>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItems;
