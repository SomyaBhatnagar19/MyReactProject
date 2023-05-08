import "./App.css";
import Card from "./CustomComponents/UI/Card";
// import ExpenseItem from "./CustomComponents/Expenses/ExpenseItem";
// import ExpenseForm from "./CustomComponents/NewExpense/ExpenseForm";
import NewExpense from "./CustomComponents/NewExpense/NewExpense";
import React, { useState } from "react";
import ExpenseFilter from "./CustomComponents/ExpenseFilter";
import ExpensesList from "./CustomComponents/Expenses/ExpensesList";
import ExpensesChart from "./CustomComponents/Expenses/ExpensesChart";
// import ConditionalExpenseList from "./CustomComponents/ConditionalExpenseList";

const App = () => {
  const [LocationofExpense, setExpenses] = useState([
    {
      id: "e1",
      title: "Food",
      // amount: "Rs. 50"
      amount: 50,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "Petrol",
      // amount: "Rs. 100"
      amount: 100,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Movie",
      // 
      amount: 250,
      date: new Date(2021, 2, 28),
    },
  ]);

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addExpenseHandler = (expense) => {
    // setShowExpenseForm(true);
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { ...expense }];
    });
    console.log("In App.js");
    // console.log(LocationofExpense);
  };
  console.log(LocationofExpense);

  const [filteredYear, setFilteredYear] = useState("");
  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = LocationofExpense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {showExpenseForm ? (
          <NewExpense onAddExpense={addExpenseHandler} />
        ) : (
          <button
            className="Card"
            style={{
              padding: "0.2rem",
              background: "#4b4b4b",
              margin: "1rem",
              borderColor: "black",
              color: "whitesmoke",
            }}
            onClick={() => setShowExpenseForm(true)}
          >
            Add Expense
          </button>
        )}
      </div>
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      

      <Card>
        <ExpenseFilter
          selectedYear={filteredYear}
          onFilterChange={handleFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <h5 style={{ marginTop: "0.5rem", textAlign: "center" }}>
          Expense List:-
        </h5>
        <ExpensesList location={filteredExpenses} />
      </Card>
    </div>
  );
};

export default App;
