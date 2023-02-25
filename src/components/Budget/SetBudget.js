import React, {useState} from 'react'

const SetBudget = props => {

    const [budget, setBudget] = useState(0);

    const handleBudget = event =>  {
        setBudget(event.target.value);
    }

    const handleBudgetSubmit = event => {
        event.preventDefault();
        props.OnBudgetSubmit(budget);
    }

    return (
        <form onSubmit={handleBudgetSubmit} className="set-budget">
            <div className="budget-control">
                <label htmlFor="budget" className="budget">Budget:</label>
                <input 
                    type="number" 
                    name="budget" 
                    min="1" 
                    step= "1"
                    value={budget} 
                    onChange={handleBudget} 
                />
            </div>
            <div className="budget-button_control">
                <button type="submit">Set Monthly Budget</button>
            </div>
        </form>
    )
}

export default SetBudget