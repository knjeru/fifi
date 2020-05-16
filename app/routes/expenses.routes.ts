import { Expenses } from "../controllers/expenses.controller.ts"


const EXPENSES_CONTROLLER = new Expenses()

export const EXPENSES_ROUTES = [
    {path: '/api/get_expenses', method: 'GET', handler: EXPENSES_CONTROLLER.getAllExpenses},
    {path: '/api/get_expense/:id', method: 'GET', handler: EXPENSES_CONTROLLER.getExpense}
]