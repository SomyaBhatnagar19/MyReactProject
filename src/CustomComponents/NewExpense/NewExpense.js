import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />;
};
export default NewExpense;
