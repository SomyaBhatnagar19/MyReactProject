import "./App.css";
import Card from "./CustomComponents/UI/Card";
// import ExpenseItem from "./CustomComponents/Expenses/ExpenseItem";
// import ExpenseForm from "./CustomComponents/NewExpense/ExpenseForm";
import NewExpense from "./CustomComponents/NewExpense/NewExpense";
import React, { useState } from "react";
import ExpenseFilter from './CustomComponents/ExpenseFilter';
import ExpensesList from "./CustomComponents/Expenses/ExpensesList";
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


  const [showExpenseForm, setShowExpenseForm] = useState(false);

   const addExpenseHandler = (expense) => {
    // setShowExpenseForm(true);
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

  // const saveExpenseHandler = (enteredExpenseData) => {
  //   const expenseData = {
  //     ...enteredExpenseData,
  //     id: Math.random().toString(),
  //   };
  //   console.log(expenseData);
  //   setShowExpenseForm(false);
  // };

  return (
    <div>
      <div style={{textAlign: 'center'}}>
  {showExpenseForm ?
    <NewExpense onAddExpense={addExpenseHandler}  /> :
    <button 
    className="Card"
    style={{padding: '0.2rem', background: '#4b4b4b', margin: '1rem', borderColor: 'black', color: 'whitesmoke'}}
    onClick={() => setShowExpenseForm(true)}>Add Expense</button>
  }
</div>



      {/* {showExpenseForm ?
        <NewExpense onAddExpense={addExpenseHandler}  /> :
        <button 
        className="Card"
        style={{padding: '0.2rem', background: '#4b4b4b', margin: '1rem', borderColor: 'black', color: 'whitesmoke'}}
        onClick={() => setShowExpenseForm(true)}>Add Expense</button>
      } */}
      
        
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      
      <Card>
      <ExpenseFilter selectedYear={filteredYear}
        onFilterChange={ handleFilterChange} />
        <h5 style={{ marginTop: "0.5rem", textAlign: "center" }}>
          Expense List:-
        </h5>
        {/* {filteredExpenses.length === 0 && <p>No Expense Found</p>}
        {filteredExpenses.length > 0 && <ExpenseItem location={filteredExpenses} />} */}
        {/* {newExpenses} */}
        <ExpensesList location = {filteredExpenses}/>
         
      </Card>
    </div>
  )
};



export default App;
// import "./App.css";
// import Card from "./CustomComponents/UI/Card";
// import NewExpense from "./CustomComponents/NewExpense/NewExpense";
// import React, { useState } from "react";
// import ExpenseFilter from './CustomComponents/ExpenseFilter';
// import ExpensesList from "./CustomComponents/Expenses/ExpensesList";

// const App = () => {
//   const [LocationofExpense, setExpenses] = useState([
//     {
//       id: "e1",
//       title: "Food",
//       amount: "Rs. 50",
//       date: new Date(2023, 7, 14),
//     },
//     {
//       id: "e2",
//       title: "Petrol",
//       amount: "Rs. 100",
//       date: new Date(2022, 2, 12),
//     },
//     {
//       id: "e3",
//       title: "Movie",
//       amount: "Rs. 250",
//       date: new Date(2021, 2, 28),
//     },
//   ]);

//   // const [showExpenseForm, setShowExpenseForm] = useState(false);

//   const addExpenseHandler = (expense) => {
//     setExpenses((prevExpenses) => {
//       return [...prevExpenses, {...expense}];
//     });
//     console.log("In App.js"); 
//   };

//   const [filteredYear, setFilteredYear] = useState("");
//   const handleFilterChange = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   }

//   const filteredExpenses = LocationofExpense.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   // const cancelExpenseHandler = () => {
//   //   setShowExpenseForm(false);
//   // }

//   return (
//     <div>
      
//       {showExpenseForm ?
//         <NewExpense onAddExpense={addExpenseHandler} onCancel={cancelExpenseHandler} /> :
//         <button 
//         className="card"
//         style={{padding: '0.2rem', background: 'blue'}}
//         onClick={() => setShowExpenseForm(true)}>Add Expense</button>
//       }
      
//       <Card>
//         <ExpenseFilter selectedYear={filteredYear} onFilterChange={handleFilterChange} />
//         <h5 style={{ marginTop: "0.5rem", textAlign: "center" }}>
//           Expense List:-
//         </h5>
//         <ExpensesList location={filteredExpenses}/>
//       </Card>
//     </div>
//   )
// };

// export default App;
