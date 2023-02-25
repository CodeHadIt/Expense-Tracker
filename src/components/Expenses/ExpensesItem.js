import React, {useState} from 'react';
import ExpensesDate from './ExpensesDate';

const ExpensesItem = props => {
    const [title, setTitle] = useState(props.title)

    const handleTitleChange = () => {
        setTitle("Changed")
    }

    return (
        <li>
            <div className='expense-item'>
                <ExpensesDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{props.title}</h2>
                    <div className="expense-item_price">${props.amount}</div>
                </div>
            </div>
        </li>
    )
}

export default ExpensesItem