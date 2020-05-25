import { dex } from "../config/db.config.ts"

const TABLE_NAME = "user_financial_profile"

export const createUserFinancialProfileTableQuery = () => {
    return dex.schema.createTable(TABLE_NAME, (table: any) => {
        table.increments("id").primary();
        table.decimal("amount_income", 32);
        table.decimal("amount_paycheck");
        table.integer("paycheck_frequency");
    }).toString()
}

export const getUserFinancialProfile = (id: any) => {
    return dex.queryBuilder().select().from(TABLE_NAME).where({id: id}).limit(1).toString();
}

export const addUserFinancialProfile = (criteria: any) => {
    return dex.queryBuilder().insert(criteria).into(TABLE_NAME).toString()
}

export const updateUserFinancialProfile = (id:any, criteria: any) => {
    return dex.queryBuilder().update(criteria).into(TABLE_NAME).where({id: id}).toString()
}

export const removeUserFinancialProfile = (id: any) => {
    return dex.queryBuilder().delete().from(TABLE_NAME).where({id: id}).toString()
}