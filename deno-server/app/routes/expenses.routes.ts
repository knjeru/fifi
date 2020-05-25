import { Router } from "https://deno.land/x/oak/mod.ts";
import { Expenses } from "../controllers/expenses.controller.ts"


const expensesRouter = new Router();
const EXPENSES_CONTROLLER = new Expenses()

expensesRouter.get('/api/get_expenses', EXPENSES_CONTROLLER.getAllExpenses);
expensesRouter.get('/api/get_expense/:id', EXPENSES_CONTROLLER.getExpense);

expensesRouter.post('/api/add_expense', EXPENSES_CONTROLLER.addExpense);
expensesRouter.put('/api/update_expense/:id', EXPENSES_CONTROLLER.updateExpense);

expensesRouter.delete('/api/remove_expense/:id', EXPENSES_CONTROLLER.removeExpense)

// TODO: Need to move to 
expensesRouter.get('/api/create_expenses_table', EXPENSES_CONTROLLER.createExpensesTable);

export default expensesRouter;