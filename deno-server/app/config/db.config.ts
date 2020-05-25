import Dex from "https://deno.land/x/dex/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";


export const dex = new Dex({
    client: "postgres"
});

export const dbClient = new Client({
    password: "postgres",
    user: "postgres",
    hostname: "postgres",
    database: "fifi"
});
