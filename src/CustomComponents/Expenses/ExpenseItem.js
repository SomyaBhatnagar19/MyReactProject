import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import App from "../App";
import Card from "../UI/Card";
import ExpenseDetail from "./ExpenseDetail";
function ExpenseItem(props) {
  return (
    <Card>
      <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <ExpenseDetail title={props.title}/>
        <div className="expense-item_price">
        <ExpenseDetail amount={props.amount}/>
        </div>
      </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;




