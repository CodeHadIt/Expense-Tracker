import React, {useState} from "react";
import ChartBar from "./ChartBar";
import SetBudget from "../Budget/SetBudget";

const Chart = (props) => {
    const [monthlyBudget, setMonthlyBudget] = useState(0);
    //returning an array of datapoint numbers(values). This is tghe summation of amounts per month.
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const setBudgetAmount = budget => {
        setMonthlyBudget(budget)
    }

    return (
        <>
            <SetBudget OnBudgetSubmit ={setBudgetAmount}/>
            <div className="chart">
                {props.dataPoints.map((dataPoint) => (
                    <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    budget={monthlyBudget}
                    label={dataPoint.label}
                    />
                ))}
            </div>
        </>
    );
};

export default Chart;
