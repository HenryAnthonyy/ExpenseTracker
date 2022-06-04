import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpenseData(expenseData)
    }

   

  return (

    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData}/> 
    </div>
  )
}

export default NewExpense