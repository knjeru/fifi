import { Router } from "https://deno.land/x/oak/mod.ts";
import { Expenses } from "../controllers/expenses.controller.ts"

const CONTROLLER = new Expenses();

const expensesRouter = new Router();

expensesRouter.get('/api/get_expenses', CONTROLLER.getAllExpenses);
expensesRouter.get('/api/get_expense/:id', CONTROLLER.getExpense);

expensesRouter.post('/api/add_expense', CONTROLLER.addExpense);
expensesRouter.put('/api/update_expense/:id', CONTROLLER.updateExpense);

expensesRouter.delete('/api/remove_expense/:id', CONTROLLER.removeExpense)

// TODO: Need to move to 
expensesRouter.get('/api/create_expenses_table', CONTROLLER.createExpensesTable);

export default expensesRouter;