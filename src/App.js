import React, { useState, useEffect, useMemo, useCallback } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, title: "Food", amount: 200 },
      { id: 2, title: "Travel", amount: 500 }
    ];
    setExpenses(data);
  }, []);

  const addExpense = useCallback((expense) => {
    setExpenses(prev => [...prev, expense]);
  }, []);

  const total = useMemo(() => {
    return expenses.reduce((sum, exp) => sum + exp.amount, 0);
  }, [expenses]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />

      <h2>Total: ₹{total}</h2>
    </div>
  );
}