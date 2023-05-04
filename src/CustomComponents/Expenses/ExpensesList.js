
import React from "react";
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.location.length === 0) {
    console.log("props or props.location is missing or has no length:", props);
    return (
      
        <div className='expense-list'>
          <p><strong>Alert!</strong></p>
          <p>Only single expense here. Please add more...</p>
        </div>
      
    );
  } else {
    console.log("props and props.location are valid:", props);
    return <ExpenseItem location={props.location} />;
  }
};

export default ExpensesList;
