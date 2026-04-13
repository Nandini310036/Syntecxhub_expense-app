import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} exp={exp} />
      ))}
    </ul>
  );
}