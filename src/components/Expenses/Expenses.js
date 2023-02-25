import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
    const[filteredMonths, setFilteredMonths] = useState("January");

    const handleFilterChange = selectedMonth => {
        setFilteredMonths(selectedMonth);
    };

    const ExpenseFilter = props.items.filter(expense => {
        return expense.date.toLocaleString("en-Us", {month: "long"}) === filteredMonths;
    })


    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredMonths} onChangeFilter={handleFilterChange}/>
            <ExpensesChart expenses={ExpenseFilter} />
            <ExpenseList items={ExpenseFilter} />
        </div>
    )
}

export default Expenses