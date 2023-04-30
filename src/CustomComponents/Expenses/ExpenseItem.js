// import ExpenseDate from "./ExpenseDate";
// import React, { useState } from 'react';
// import "./ExpenseItem.css";
// import ExpenseDetail from "./ExpenseDetail";
// function ExpenseItem(props) {

//   // const [getTitle, setTitle] = useState(props.location.title);
//   // const clickHandler = () => {
//   //   setTitle('Updated Title');
//   //   console.log(getTitle);
//   // }

//   const deleteTitleHandler = (e) => {
//     e.preventDefault();
//     let expenseId = e.target.dataset.id;
//     let expenseElement = document.getElementById(expenseId);
//     if (expenseElement) {
//       expenseElement.remove();
//     }
//   };
// //assigning obj to useState so that entire object value is updated not just amount string
//   // const [amount, setAmount] = useState({});
//   // const UpdateExpenseHandler = (id) => {
//   //   const amount = '$100';
//   //   setAmount((initialAmount)=>{
//   //     return(
//   //       {...initialAmount,
//   //       [id]:amount}
//   //     )
//   //   })
//   // }
//   const [newAmounts, setNewAmounts] = useState({});

//   const UpdateExpenseHandler = (locationId) => {
//     const newAmount = "100$";
//     setNewAmounts((prevAmounts) => ({
//       ...prevAmounts,
//       [locationId]: newAmount,
//     }));
//     console.log(newAmounts)
//   };

//   return (
//     <div>
//       {/* {props.location.map((element) => {
//         return (
//           <div className="expense-item" id={element.id}>
//             <ExpenseDate date={element.date} />
//             <ExpenseDetail title={element.title} />
//             <ExpenseDetail amount={element.amount} />
//             <button
//               className="submitBtn"
//               type = "submit"
//               data-id = {element.id}
//               onClick = {deleteTitleHandler}
//             >
//               Delete Expense
//             </button>
//             <button
//                 className="ChangeTitle"
//                 onClick = {clickHandler}
//             >
//               Change Title
//             </button>
//             <button
//               className="updateBtn"
//               onClick = {()=>UpdateExpenseHandler(element.id)}
//             >
//               Update Amount
//             </button>
//           </div>
//         );
//       })} */}
//       {props.location.map((element) => {
//   return (
//     <div className="expense-item" id={element.id}>
//       <ExpenseDate date={element.date} />
//       <ExpenseDetail title={element.title} />
//       {element.amount && <ExpenseDetail amount={element.amount} />}
//             {newAmounts[element.id] && <ExpenseDetail amount={newAmounts[element.id]} />}

//       <button
//         className="submitBtn"
//         type="submit"
//         data-id={element.id}
//         onClick={deleteTitleHandler}
//       >
//         Delete Expense
//       </button>
//       <button
//         className="updateBtn"
//         onClick={() => UpdateExpenseHandler(element.id)}
//       >
//         Update Amount
//       </button>
//     </div>
//   );
// })}
//     </div>
//   );
// }

// export default ExpenseItem;
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseItem(props) {
  const [expenses, setExpenses] = useState(props.location);

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
      {expenses.map((expense) => {
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
