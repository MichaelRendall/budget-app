import React from "react";
import { useBudgets } from "../contexts/BudgetsContexts";
import BudgetCard from "./BudgetCard";

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  if (max === 0) return null;

  return <BudgetCard name="Total" amount={amount} grey max={max} hideButtons />;
};

export default TotalBudgetCard;
