import { Router } from "https://deno.land/x/oak/mod.ts";
import { UserFinancialProfile } from "../controllers/user-financial-profile.controller.ts";

const CONTROLLER = new UserFinancialProfile()

const userFinancialProfileRouter = new Router();

userFinancialProfileRouter.get('/api/get_user_fp/:id', CONTROLLER.getUserFinancialProfile);

userFinancialProfileRouter.post('/api/add_user_fp', CONTROLLER.addUserFinancialProfile);
userFinancialProfileRouter.put('/api/update_user_fp/:id', CONTROLLER.updateUserFinancialProfile);

userFinancialProfileRouter.delete('/api/remove_user_fp/:id', CONTROLLER.removeUserFinancialProfile)

// TODO: Need to move to 
userFinancialProfileRouter.get('/api/create_user_fp_table', CONTROLLER.createUserFinancialProfileTable);

export default userFinancialProfileRouter;
