
import "./App.css";
import Card from "./CustomComponents/UI/Card";
import ExpenseItem from "./CustomComponents/Expenses/ExpenseItem";
const App = () => {
  const LocationOfExpense = [
    {
      id: "e1",
      title: "Food",
      amount: "Rs. 10",
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "Petrol",
      amount: "Rs. 50",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Movie",
      amount: "Rs. 100",
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <Card>
      <h5 style = {{ marginTop: "0.5rem", textAlign: "center"}}>
        Expense List:-
      </h5>
      <ExpenseItem location = {LocationOfExpense}/>
      {/* <ExpenseItem
        title={LocationOfExpense[0].title}
        amount={LocationOfExpense[0].amount}
        date={LocationOfExpense[0].date}
      />
      <ExpenseItem
        title={LocationOfExpense[1].title}
        amount={LocationOfExpense[1].amount}
        date={LocationOfExpense[1].date}
      />
      <ExpenseItem
        title={LocationOfExpense[2].title}
        amount={LocationOfExpense[2].amount}
        date={LocationOfExpense[2].date}
      /> */}
    </Card>
    
  );
}
export default App;