// import App from "../App";
import Card from "../UI/Card";
import './ExpenseItem.css';
function ExpenseDetail(props) {
  return (
    <Card>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div classname='expense-item_price'>
        <h2>{props.amount}</h2>
      </div>
    </Card>
  );
}
export default ExpenseDetail;
