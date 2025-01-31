import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        if (!input || !amount) return;

        const newExpense = {
            id: expenses.length + 1,
            title: input,
            amount: parseFloat(amount).toFixed(2),
        };

        setExpenses([...expenses, newExpense]);
        setInput('');
        setAmount('');
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    return (
        <div className="app-container">
            <h5 className="tracker-title">Expense Tracker</h5>
            <div className="expense-tracker">
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Expense" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                    <button onClick={addExpense}>Add Expense</button>
                </div>
                <ul className="expense-list">
                    {expenses.map((expense) => (
                        <li key={expense.id} className="expense-item">
                            <span className="bullet">•</span> 
                            <span className="expense-title">{expense.title}</span>
                            <span className="expense-amount">Rs:{expense.amount}</span>
                            <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpenseTracker;
