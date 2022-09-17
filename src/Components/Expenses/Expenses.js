import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import './Expenses.css';
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = selectedYear => {
     setFilteredYear(selectedYear);
  }

  const filteredExpenses= props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <div>
        <li>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} 
          onChangeFilter = {filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpenseList items = {filteredExpenses}/>
        </Card>
        </li>
      </div>
    );
}

export default Expenses;