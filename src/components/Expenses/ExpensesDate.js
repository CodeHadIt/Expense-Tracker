import React from 'react'

const ExpensesDate = props => {
    const month = props.date.toLocaleString("en-us", {month: "long"});
    const day = props.date.toLocaleString("en-us", {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
        <div className='expenses-date'>
            <div className="expenses-date_month">{month}</div>
            <div className="expenses-date_day">{day}</div>
            <div className="expenses-date_year">{year}</div>

        </div>
    )
}

export default ExpensesDate