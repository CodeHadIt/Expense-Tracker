import React, {useState} from "react";

const NewExpense = (props) => {
    const [formInputs, setFormInputs] = useState({
        title: "",
        amount: "",
        date: ""
    })

    const handleFormInputs = (event)=> {
        setFormInputs(prevInputs => {
            return {
                ...prevInputs,
                [event.target.name]: event.target.value,
                date: new Date(event.target.value),
                id: Math.random().toString()
            }
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        props.onAddExpense(formInputs)
        setFormInputs({title: "", amount: "", date: ""})
    }
    
    return (
        <div className="new-expense">
            <form onSubmit={handleFormSubmit}>
                <div className="form_control">
                    <div className="new-expense_control">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text"
                            value={formInputs.title}
                            onChange={handleFormInputs} 
                            name="title" 
                        />
                    </div>

                    <div className="new-expense_control">
                        <label htmlFor="amount">Amount</label>
                        <input 
                            type="number"
                            value={formInputs.amount} 
                            min="0.01" step= "0.01" 
                            onChange={handleFormInputs} 
                            name="amount" 
                        />
                    </div>

                    <div className="new-expense_control">
                        <label htmlFor="date">Date</label>
                        <input 
                            type="date" 
                            value={formInputs.date}
                            min= "2020-01-01" max="2024-12-31" 
                            onChange={handleFormInputs} 
                            name="date"  
                        />
                    </div>
                </div>
                <div className="new-expense_actions">
                    <button type="submit">Add New Expense</button>
                </div>
            </form>
        </div>
    );
};

export default NewExpense;
