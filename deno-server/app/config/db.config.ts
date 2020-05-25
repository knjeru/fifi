import Dex from "https://deno.land/x/dex/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const env = Deno.env;

const DB_HOST = env.get('POSTGRES_HOST') || "localhost";
const DB_USER = env.get('POSTGRES_USER') || "kevin";
const DB_PASSWORD = env.get('POSTGRES_PASSWORD') || "";
const DB_NAME = env.get('POSTGRES_DB') || "fifi";

export const dex = new Dex({
    client: "postgres"
});

export const dbClient = new Client({
    password: DB_PASSWORD,
    user: DB_USER,
    hostname: DB_HOST,
    database: DB_NAME
});
