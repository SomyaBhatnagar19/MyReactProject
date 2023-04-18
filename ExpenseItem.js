import './ExpenseItem.css';
function ExpenseItems() {
    const LocationOfExpenditure = ['Food', 'Petrol', 'Movie'];
  return (<div classname='Card'> 
      <div className='Title'>
        <h2>Expense Item : </h2>
      </div>
      <div className='items'> 
        <p>{LocationOfExpenditure[0]} for Rs 10 </p> 
      </div>
      <div className='items'> 
        <p>{LocationOfExpenditure[1]} for Rs 100</p>
      </div>
      <div className='items'> 
        <p>{LocationOfExpenditure[2]} for Rs 200</p>
      </div>
  </div>)
}
export default ExpenseItems;