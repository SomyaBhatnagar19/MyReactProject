import React from "react";

const ExpenseFilter = (props) => {

    const handleYearChange = (event) => {
        props.onFilterChange(event.target.value);
}
    return (
        <div className="Card-container"
        style={{margin:"20px"}}>
        <div className="border border-dark card card-body bg-dark text-light"   >
                <label> Filter by year : </label>
            <select onChange={handleYearChange}>
                <option value=" ">All</option>
                <option value="2023"> 2023 </option>
                <option value="2022"> 2022 </option>
                <option value="2021"> 2021 </option>
            </select>
            </div>
            </div>
    );
};
export default ExpenseFilter;