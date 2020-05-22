import Dex from "https://deno.land/x/dex/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";


export const dex = new Dex({
    client: "postgres"
});

export const dbClient = new Client({
    hostname: "localhost",
    user: "kevin",
    database: "fifi",
    port: 5432
});
