import pogo from "https://deno.land/x/pogo/main.ts";
import { EXPENSES_ROUTES } from "./app/routes/expenses.routes.ts";
import { DEBTS_ROUTES } from "./app/routes/debts.routes.ts";

const router = pogo.router()

router.add(EXPENSES_ROUTES)
router.add(DEBTS_ROUTES)

export default router;