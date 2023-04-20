import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import App from "../App";
import ExpenseDetail from "./ExpenseDetail";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        {/* <h2>{props.title}</h2> */}
        <ExpenseDetail title={props.title}/>
        <div className="expense-item_price">
        <ExpenseDetail amount={props.amount}/>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
