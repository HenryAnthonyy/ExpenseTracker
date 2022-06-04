import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020')

  const filteredYear = (year) => {
    // console.log(year)
    setSelectedYear(year);
  }

  const expenseFilter = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })
 

  return (
    
    <div>
      <Card className="expenses">
        <ExpenseFilter selected = {selectedYear} onFilterExpenseYear={filteredYear}/>

        {/* {props.items.map(expense => (
          <ExpenseItem 
              key = {expense.id}
              title = {expense.title}
              amount = {expense.amount}
              date = {expense.date}
          />
        ))} */}

        <ExpensesList items = {expenseFilter}/>

      </Card>
    </div>
  )
}

export default Expenses