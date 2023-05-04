import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseItem(props) {
  const [expenses, setExpenses] = useState([]);

  // setExpenses((prevState=>{
  //   [...prevState, {expenses}]
  // }))
  // const clickHandler = () => {
  //   setExpenses((prevState) => {
  //     const updatedExpenses = prevState.map((expense) => {
  //       return { ...expense, title: "Updated Title" };
  //     });
  //     return updatedExpenses;
  //   });
  // };

  const deleteTitleHandler = (e) => {
    // e.preventDefault();
    // const expenseId = e.target.dataset.id;
    // setExpenses((prevState) => {
    //   const updatedExpenses = prevState.filter(
    //     (expense) => expense.id !== expenseId
    //   );
    //   return updatedExpenses;
    e.preventDefault();
    let expenseId = e.target.dataset.id;
    let expenseElement = document.getElementById(expenseId);
    if (expenseElement) {
      expenseElement.remove();
    }
  };

  const updateExpenseHandler = (expenseId) => {
    setExpenses((prevState) => {
      const updatedExpenses = prevState.map((expense) => {
        if (expense.id === expenseId) {
          return { ...expense, amount: "$100" };
        }
        return expense;
      });
      return updatedExpenses;
    });
  };
 

  return (
    <div>
      {props.location.map((expense) => {
        return (
          <div className="expense-item" id={expense.id}>
            <ExpenseDate date={expense.date} />
            <ExpenseDetail title={expense.title} />
            <ExpenseDetail amount={expense.amount} />
            <button
              className="submitBtn"
              type="submit"
              data-id={expense.id}
              onClick={deleteTitleHandler}
            >
              Delete Expense
            </button>
            {/* <button className="ChangeTitle" onClick={clickHandler}>
              Change Title
            </button> */}
            <button
              className="updateBtn"
              onClick={() => updateExpenseHandler(expense.id)}
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
