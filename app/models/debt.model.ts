import { dex } from "../config/db.config.ts"

const TABLE_NAME = "debts"

export const createDebtTableQuery = () => {
    return dex.schema.createTable(TABLE_NAME, (table: any) => {
        table.increments("id").primary();
        table.string("issuer", 32);
        table.string("debt_type");
        table.decimal("amount_owed");
        table.decimal("interest_rate");
        table.decimal("monthly_payment");
        table.date("dt_desired_payoff");
    }).toString()
}

export const getAllDebts = () => {
    return dex.queryBuilder().select().from(TABLE_NAME).toString();
}

export const getDebtById = (id: any) => {
    return dex.queryBuilder().select().from(TABLE_NAME).where({id: id}).limit(1).toString();
}

export const createDebt = (criteria: any) => {
    return dex.queryBuilder().insert(criteria).into(TABLE_NAME).toString()
}

export const updateDebt = (id:any, criteria: any) => {
    return dex.queryBuilder().update(criteria).into(TABLE_NAME).where({id: id}).toString()
}

export const removeDebt = (id: any) => {
    return dex.queryBuilder().delete().from(TABLE_NAME).where({id: id}).toString()
}