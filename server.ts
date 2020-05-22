import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_PORT } from "./config.ts";
import { dbClient } from "./app/config/db.config.ts";
import debtsRouter from "./app/routes/debts.routes.ts";
import expensesRouter from "./app/routes/expenses.routes.ts";

const app = new Application();


// Register all available routes
app.use(debtsRouter.routes());
app.use(expensesRouter.routes());


// Setup DB connection
await dbClient.connect()

// Start server
console.log(`Starting server at port ${APP_PORT}`)
await app.listen({port: APP_PORT});
