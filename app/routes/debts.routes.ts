import { Debts } from "../controllers/debts.controller.ts"

const DEBTS_CONTROLLER = new Debts()

export const DEBTS_ROUTES = [
    {path: '/api/get_debts', method: 'GET', handler: DEBTS_CONTROLLER.getAllDebts},
    {path: '/api/get_debt/:id', method: 'GET', handler: DEBTS_CONTROLLER.getDebt}
]