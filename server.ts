import pogo from "https://deno.land/x/pogo/main.ts";
import { APP_PORT } from "./config.ts"
import router from "./routing.ts"

const server = pogo.server({port: APP_PORT});

server.route(router);
console.log(`Starting server at port ${APP_PORT}`)
await server.start();