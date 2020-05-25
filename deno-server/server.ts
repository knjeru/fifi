import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { APP_PORT } from "./config.ts";
import { dbClient } from "./app/config/db.config.ts";
import debtsRouter from "./app/routes/debts.routes.ts";
import expensesRouter from "./app/routes/expenses.routes.ts";

const app = new Application();

// Register middleware
app.use(oakCors())

// Register all available routes
app.use(debtsRouter.routes());
app.use(expensesRouter.routes());

// Setup DB connection
const startDbConnection = async () => {
    console.log('Attempting to start DB.')
    await dbClient.connect().then(() => {
        console.log('DB started successfully.')
    }).catch(() => {
        console.log('DB failed to start.')
        setTimeout(() => {
            console.log('Reconnecting.')
            startDbConnection()
        }, 5000);
    });
};
startDbConnection();

// Start server
console.log(`Starting server at port ${APP_PORT}`)
await app.listen({port: APP_PORT});
