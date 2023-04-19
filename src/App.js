import logo from './logo.svg';
import './App.css';
//importing the custom component we made
import ExpenseItem from './components/ExpenseItem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExpenseItem>
          <h4>Food Rs 10</h4>
          <h4>Petrol Rs 100</h4>
          <h4>Movies Rs 200</h4>
        </ExpenseItem>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
