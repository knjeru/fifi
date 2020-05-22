import { Router } from "https://deno.land/x/oak/mod.ts";
import { Debts } from "../controllers/debts.controller.ts"

const debtsRouter = new Router();
const DEBTS_CONTROLLER = new Debts()

debtsRouter.get('/api/get_debts', DEBTS_CONTROLLER.getAllDebts);
debtsRouter.get('/api/get_debt/:id', DEBTS_CONTROLLER.getDebt);

debtsRouter.post('/api/add_debt', DEBTS_CONTROLLER.addDebt);
debtsRouter.put('/api/update_debt/:id', DEBTS_CONTROLLER.updateDebt);

debtsRouter.delete('/api/remove_debt/:id', DEBTS_CONTROLLER.removeDebt)

// TODO: Need to move to 
debtsRouter.get('/api/create_debts_table', DEBTS_CONTROLLER.createDebtsTable);

export default debtsRouter;