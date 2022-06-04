import React, { useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {

    //when using one state to cater for different the 3 states needed we pass in an object in the useState '{}'
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

   
    const titleInput = (event) => {
        setUserInput((prevState) =>{
            return{
                ...prevState,
                enteredTitle: event.target.value
            }
        });

        //when depending on a previous state to update current state 
        //it is safer to pass in the previous state as shown above
    }

    const amountInput = (event) =>{
        setUserInput((prevState) =>{
            return{
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }
    const dateInput = (event) =>{
        setUserInput((prevState) =>{
            return{
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault(); // prevents the page from reloading when data is submitted

        const expenseData = {
            title : userInput.enteredTitle,
            amount : userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        // console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    }

    const [showForm, setShowForm] = useState(true);
    
    const showFormHandler = () => {
      setShowForm(false);
      
    }

    const hideFormHandler = () => {
        setShowForm(true);
    }

  return (
    <div>
        {showForm ? 
        
        (
            <div>
                <button onClick = {showFormHandler}>Add New Expense</button>
            </div>
            
        ) :

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleInput} placeholder="Enter Title"/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountInput}  placeholder="Enter Amount"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'min='2019-01-01' max = '2023-01-01' value={userInput.enteredDate} onChange={dateInput}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick = {hideFormHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
            </form>
    
    }
        
    </div>
  )
}

export default ExpenseForm