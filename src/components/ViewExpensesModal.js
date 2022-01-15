import { Button, Modal, Stack } from "react-bootstrap";
import {
  UNCATEGORISED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContexts";
import { currencyFormatter } from "../utils";

const ViewExpensesModal = (props) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(props.budgetId);
  const budget =
    UNCATEGORISED_BUDGET_ID === props.budgetId
      ? { name: "Uncategorised", id: UNCATEGORISED_BUDGET_ID }
      : budgets.find((b) => b.id === props.budgetId);

  return (
    <Modal show={props.budgetId != null} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizantal" gap="2">
            <div>
              Expenses - {budget?.name}
              {props.budgetId !== UNCATEGORISED_BUDGET_ID && (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    deleteBudget(props.budgetId);
                    props.handleClose();
                  }}
                >
                  Delete
                </Button>
              )}
            </div>
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" gap="3">
          {expenses.map((expense) => (
            <Stack direction="horizontal" gap="2" key={expense.id}>
              <div className="me-auto fs-4">{expense.description}</div>
              <div className="fs-5">
                {currencyFormatter.format(expense.amount)}
              </div>
              <Button
                size="sm"
                variant="outline-danger"
                onClick={() => deleteExpense(expense)}
              >
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  );
};

export default ViewExpensesModal;
