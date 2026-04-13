import React, { useState, useRef } from "react";

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount)
    };

    onAdd(newExpense);

    setTitle("");
    setAmount("");

    titleRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}