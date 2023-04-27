import "./ExpenseDetail.css";
// import Card from "../UI/Card";
import "./ExpenseItem.css";
function ExpenseDetail(props) {
  return (
    <div>
      <div className="expense-item_description">
        <p style={{ marginTop: "20px" }}>
          {props.title}
          {props.amount}
        </p>
      </div>
    </div>
  );
}
export default ExpenseDetail;
