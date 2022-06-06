import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020')

  const filteredYear = (year) => {
    // console.log(year)
    setSelectedYear(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })
 

  return (
    
    <div>
      <Card className="expenses">
        <ExpenseFilter selected = {selectedYear} onFilterExpenseYear={filteredYear}/>

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items = {filteredExpenses}/>

      </Card>
    </div>
  )
}

export default Expenses