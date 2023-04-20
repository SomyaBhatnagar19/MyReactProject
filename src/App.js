import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./CustomComponents/ExpenseItem";
function App() {
  const LocationOfExpense = [
    {
      id: "e1",
      title: "Food",
      amount: 10,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Petrol",
      amount: 50,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Movie",
      amount: 100,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React <br></br>
          Expense Items:-
        </a>
      </header>
      <ExpenseItem
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
      />
      
    </div>
  );
}

export default App;
