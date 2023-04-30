import React from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const handleTitleChange = (event) => {
    console.log(event.target.value);
  };

  const handleAmountChange = (event) => {
    console.log(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
  };
  //form for input
  return (
    <Card>
      <h5>Add Expenses:- </h5>
      <hr></hr>
      <form>
        <label htmlFor="title">Title : </label> &nbsp;
        <input type="text" id="title" placeholder="Expense Title" onChange={handleTitleChange}/>
        &nbsp;&nbsp;
        <label htmlFor="amount">Amount : </label> &nbsp;
        <input type="number" id="amount" placeholder="Select Expense Amount" onChange={handleAmountChange}/>
        &nbsp;&nbsp;
        <label htmlFor="date">Date : </label> &nbsp;
        <input
          type="date"
          id="date"
          placeholder="Select Expense Date"
          min="2023-01-01"
          onChange={handleDateChange}
        />
        <br></br>
        <button type="submit" className="form-submit">
          Add Expense
        </button>
      </form>
    </Card>
  );
};

export default ExpenseForm;
