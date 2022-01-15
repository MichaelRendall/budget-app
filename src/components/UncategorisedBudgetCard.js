import React from "react";
import {
  UNCATEGORISED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContexts";
import BudgetCard from "./BudgetCard";

const UncategorisedBudgetCard = (props) => {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORISED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) return null;
  
  return <BudgetCard name="Uncategorised" amount={amount} grey {...props} />;
};

export default UncategorisedBudgetCard;
