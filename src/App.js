import "./App.css";
import Card from "./CustomComponents/UI/Card";
import ExpenseItem from "./CustomComponents/Expenses/ExpenseItem";
// import ExpenseForm from "./CustomComponents/NewExpense/ExpenseForm";
import NewExpense from "./CustomComponents/NewExpense/NewExpense";
import React, { useState } from "react";
import ExpenseFilter from './CustomComponents/ExpenseFilter';
const App = () => {
  const [LocationofExpense, setExpenses] = useState([
    {
      id: "e1",
      title: "Food",
      amount: "Rs. 50",
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "Petrol",
      amount: "Rs. 100",
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Movie",
      amount: "Rs. 250",
      date: new Date(2021, 2, 28),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, {...expense}];
    });
    console.log("In App.js"); 
    // console.log(LocationofExpense);
  };
  console.log(LocationofExpense);

  const [filteredYear, setFilteredYear] = useState("");
  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = LocationofExpense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let newExpenses = <p>No expense found</p>
  if(filteredExpenses.length > 0){
    newExpenses = <ExpenseItem location={filteredExpenses} />
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Card>
      <ExpenseFilter selectedYear={filteredYear}
        onFilterChange={ handleFilterChange} />
        <h5 style={{ marginTop: "0.5rem", textAlign: "center" }}>
          Expense List:-
        </h5>
        {/* {filteredExpenses.length === 0 && <p>No Expense Found</p>}
        {filteredExpenses.length > 0 && <ExpenseItem location={filteredExpenses} />} */}
         {newExpenses}
         
      </Card>
    </div>
  )
};



export default App;


