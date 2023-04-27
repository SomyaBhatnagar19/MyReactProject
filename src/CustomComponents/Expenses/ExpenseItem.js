import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetail from "./ExpenseDetail";
function ExpenseItem(props) {
  const deleteTitleHandler = (e) => {
    e.preventDefault();
    let expenseId = e.target.dataset.id;
    let expenseElement = document.getElementById(expenseId);
    if(expenseElement){
      expenseElement.remove();
    }
  };
  return (
    <div>
      {props.location.map((element) => {
        return (
          <div className="expense-item" id={element.id}>
            <ExpenseDate date={element.date} />
            <ExpenseDetail title={element.title} />
            <ExpenseDetail amount={element.amount} />
            <button type='submit' data-id={element.id} onClick={deleteTitleHandler}>Delete Expense</button>
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseItem;
