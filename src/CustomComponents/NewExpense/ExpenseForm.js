import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //defining states
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //one state object rather than 3 state slices
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //done so that those data are not lost
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, 
    //   enteredAmount: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredAmount: event.target.value};
    // })
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, 
    //   enteredDate: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredDate: event.target.value};
    
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
  }
  //form for input
  return (
    <Card>
      <h5>Add Expenses:- </h5>
      <hr></hr>
      <div>
        
      </div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title : </label> &nbsp;
        <input type="text" id="title" placeholder="Expense Title" onChange={handleTitleChange} value={enteredTitle}/>
        &nbsp;&nbsp;
        <label htmlFor="amount">Amount : </label> &nbsp;
        <input type="number" id="amount" placeholder="Select Expense Amount" onChange={handleAmountChange} value={enteredAmount}/>
        &nbsp;&nbsp;
        <label htmlFor="date">Date : </label> &nbsp;
        <input
          type="date"
          id="date"
          placeholder="Select Expense Date"
          min="2023-01-01"
          onChange={handleDateChange}
          value={enteredDate}
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
