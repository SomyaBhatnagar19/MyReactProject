import "./App.css";
import Card from "./CustomComponents/UI/Card";
import ExpenseItem from "./CustomComponents/Expenses/ExpenseItem";
import ExpenseForm from "./CustomComponents/NewExpense/ExpenseForm";
const App = () => {
  const LocationOfExpense = [
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
  ];

  return (
    <div>
      <ExpenseForm/>
      <Card>
        <h5 style={{ marginTop: "0.5rem", textAlign: "center" }}>
          Expense List:-
        </h5>
        <ExpenseItem location={LocationOfExpense} />
      </Card>
    </div>
  );
};
export default App;
