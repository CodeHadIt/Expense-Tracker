import React from 'react';

const ExpensesFilter = props => {

    const handleDropdownChange = event => {
        props.onChangeFilter(event.target.value);
    }
    
    return (
        <div className="expenses-filter">
            <div className="expenses-filter_control">
                <label>Filter by Months</label>
                <select value={props.selected} onChange={handleDropdownChange} >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="july">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;