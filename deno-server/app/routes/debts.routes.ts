import { Router } from "https://deno.land/x/oak/mod.ts";
import { Debts } from "../controllers/debts.controller.ts"

const CONTROLLER = new Debts();

const debtsRouter = new Router();

debtsRouter.get('/api/get_debts', CONTROLLER.getAllDebts);
debtsRouter.get('/api/get_debt/:id', CONTROLLER.getDebt);

debtsRouter.post('/api/add_debt', CONTROLLER.addDebt);
debtsRouter.put('/api/update_debt/:id', CONTROLLER.updateDebt);

debtsRouter.delete('/api/remove_debt/:id', CONTROLLER.removeDebt)

// TODO: Need to move to 
debtsRouter.get('/api/create_debts_table', CONTROLLER.createDebtsTable);

export default debtsRouter;