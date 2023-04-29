import ExpenseDate from "./ExpenseDate";
import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDetail from "./ExpenseDetail";
function ExpenseItem(props) {

  const [getTitle, setTitle] = useState(props.location.title);
  const clickHandler = () => { 
    setTitle('Updated Title');
    console.log(getTitle);
  }

  const deleteTitleHandler = (e) => {
    e.preventDefault();
    let expenseId = e.target.dataset.id;
    let expenseElement = document.getElementById(expenseId);
    if (expenseElement) {
      expenseElement.remove();
    }
  };

  const [amount, setAmount] = useState(props.amount);
  const UpdateExpenseHandler = () => {
      setAmount('$100');
      console.log({amount});
    }
 
  return (
    <div>
      {props.location.map((element) => {
        return (
          <div className="expense-item" id={element.id}>
            <ExpenseDate date={element.date} />
            <ExpenseDetail title={getTitle} />
            <ExpenseDetail amount={amount} />
            <button
              className="submitBtn"  
              type = "submit"
              data-id = {element.id}
              onClick = {deleteTitleHandler}
            >
              Delete Expense
            </button>
            <button
                className="ChangeTitle"
                onClick = {clickHandler}
            >
              Change Title
            </button>
            <button
              className="updateBtn"
              onClick = {UpdateExpenseHandler}
            >
              Update Amount
              </button>
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseItem;
