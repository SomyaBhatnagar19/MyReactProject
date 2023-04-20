import App from "../App";
function ExpenseDetail(props) {
  return (
    <div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div classname='expense-item_price'>
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}
export default ExpenseDetail;
