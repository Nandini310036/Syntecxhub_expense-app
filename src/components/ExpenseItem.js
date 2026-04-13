import React from "react";

export default function ExpenseItem({ exp }) {
  return (
    <li className="item">
      <span>{exp.title}</span>
      <span>₹{exp.amount}</span>
    </li>
  );
}