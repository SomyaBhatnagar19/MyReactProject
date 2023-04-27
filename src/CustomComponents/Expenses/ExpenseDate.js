// import "./ExpenseDate.css";

// function ExpenseDate(props) {
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//   const year = props.date.getFullYear();

//   return (
//     <div className="expense-date">
//       <div className="expense-date__month">{month}</div>
//       <div className="expense-date__year">{year}</div>
//       <div className="expense-date__day">{day}</div>
//     </div>
//   );
// }

// export default ExpenseDate;
//------------------

// const ExpenseDate =(props) =>{
//   let day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   let month = props.date.toLocaleString('en-US', { month: 'long' });
//   let year = props.date.getFullYear();
//   return (
//       <div className='card card-body border border-dark' style={{ width: "8rem", marginLeft: "10px", marginTop: "10px" }}>
//       <p>{day}</p>
//       <p>{month}</p>
//           <p>{year}</p>
//       </div>
//   );
// }
// export default ExpenseDate;

import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div >{month}</div>
      <div >{year}</div>
      <div >{day}</div>
    </div>
  );
}

export default ExpenseDate;