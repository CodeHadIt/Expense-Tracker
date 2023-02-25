import React from 'react'
import ExpensesItem from './ExpensesItem'

const ExpenseList = props => {


    return (
        <ul className="expenses-list">
            {props.items.length === 0 && <h2 className="expenses-list_fallback">Found No Expenses</h2> }
            {props.items.length > 0 && props.items.map( expense => (
                        <ExpensesItem 
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                ))};
        </ul>
    )
}

export default ExpenseList