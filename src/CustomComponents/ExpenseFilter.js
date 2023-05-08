import React from "react";

const ExpenseFilter = (props) => {

    const handleYearChange = (event) => {
        props.onFilterChange(event.target.value);
}
    return (
        <div className="container"
        style={{margin:"20px"}}>
        <div >
                <label> Filter by year : </label> <br></br>
            <select 
            onChange={handleYearChange}
            style={{margin:'20px',width: '90%'}}
            >
                <option value=" ">All</option>
                <option value="2023"> 2023 </option>
                <option value="2022"> 2022 </option>
                <option value="2021"> 2021 </option>
            </select>
            {/* <button
            className="btn btn-success border-black"
            >
                Selected Year</button> */}
            <hr></hr>
            </div>
            </div>
    );
};
export default ExpenseFilter;