// import React, { useState } from "react";
// import Card from "../UI/Card";
// import "./ExpenseForm.css";
// const ExpenseForm = (props) => {
//   //defining states
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');

//   //one state object rather than 3 state slices
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: ''
//   // });

//   const handleTitleChange = (event) => {
//     setEnteredTitle(event.target.value);
//     // setUserInput({
//     //   ...userInput, //done so that those data are not lost
//     //   enteredTitle: event.target.value,
//     // })
//     // setUserInput((prevState)=>{
//     //   return {...prevState, enteredTitle: event.target.value};
//     // })
//   };

//   const handleAmountChange = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput, 
//     //   enteredAmount: event.target.value,
//     // })
//     // setUserInput((prevState)=>{
//     //   return {...prevState, enteredAmount: event.target.value};
//     // })
//   };

//   const handleDateChange = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput, 
//     //   enteredDate: event.target.value,
//     // })
//     // setUserInput((prevState)=>{
//     //   return {...prevState, enteredDate: event.target.value};
    
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate)
//     };
//     // console.log(expenseData);
//     props.onSaveExpenseData(expenseData);
//     setEnteredTitle('');
//     setEnteredAmount('');
//     setEnteredDate('');
//   }
//   //form for input
//   return (
//     <Card>
//       <h5>Add Expenses:- </h5>
//       <hr></hr>
     
//       <form onSubmit={submitHandler}>
//         <label htmlFor="title">Title : </label> &nbsp;
//         <input 
//           type="text" 
//           id="title" 
//           placeholder="Expense Title" 
//           value={enteredTitle}
//           onChange={handleTitleChange} 
//           />
//         &nbsp;&nbsp;
//         <label htmlFor="amount">Amount : </label> &nbsp;
//         <input 
//           type="number" 
//           id="amount" 
//           placeholder="Select Expense Amount" 
//           value={enteredAmount}
//           onChange={handleAmountChange} 
//           />
//         &nbsp;&nbsp;
//         <label htmlFor="date">Date : </label> &nbsp;
//         <input
//           type="date"
//           id="date"
//           placeholder="Select Expense Date"
//           min="2023-01-01"
//           value={enteredDate}
//           onChange={handleDateChange}
//         />
//         <br></br>
//         <button type="submit" className="form-submit">
//           Add Expense
//         </button>
//       </form>
//     </Card>
//   );
// };

// export default ExpenseForm;
import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //defining states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <Card>
      <h5>Add Expenses:- </h5>
      <hr></hr>

      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title : </label> &nbsp;
        <input
          type="text"
          id="title"
          placeholder="Expense Title"
          value={enteredTitle}
          onChange={handleTitleChange}
        />
        &nbsp;&nbsp;
        <label htmlFor="amount">Amount : </label> &nbsp;
        <input
          type="number"
          id="amount"
          placeholder="Select Expense Amount"
          value={enteredAmount}
          onChange={handleAmountChange}
        />
        &nbsp;&nbsp;
        <label htmlFor="date">Date : </label> &nbsp;
        <input
          type="date"
          id="date"
          placeholder="Select Expense Date"
          min="2020-01-01"
          value={enteredDate}
          onChange={handleDateChange}
        />
        <br></br>
        <button type="submit" className="cancel-btn"  onClick={cancelHandler}>
          Cancel
        </button>

        <button type="submit" className="form-submit">
          Add Expense
        </button>
      </form>
    </Card>
  );
};

export default ExpenseForm;
