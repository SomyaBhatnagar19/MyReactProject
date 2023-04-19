import logo from "./logo.svg";
import "./App.css";
//importing the custom component we made
import ExpenseItem from "./CustomComponents/ExpenseItem";
function App() {
  const LocationOfExpenditure = [
    {
      id: "e1",
      title: "Food",
      amount: "10",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Petrol",
      amount: "50",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Movie",
      amount: "100",
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
        title={LocationOfExpenditure[0].title}
        amount={LocationOfExpenditure[0].amount}
        date={LocationOfExpenditure[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={LocationOfExpenditure[1].title}
        amount={LocationOfExpenditure[1].amount}
        date={LocationOfExpenditure[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={LocationOfExpenditure[2].title}
        amount={LocationOfExpenditure[2].amount}
        date={LocationOfExpenditure[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
