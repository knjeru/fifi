import { dex } from "../config/db.config.ts"

const TABLE_NAME = "expenses"

export const createExpenseTableQuery = () => {
    return dex.schema.createTable(TABLE_NAME, (table: any) => {
        table.increments("id").primary();
        table.string("expense", 32);
        table.string("pay_period");
        table.date("dt_due");
        table.decimal("amount");
        table.string("account_payed_from");
        table.string("account_payed_to");
        table.string("expense_type");
    }).toString()
}

export const getAllExpenses = () => {
    return dex.queryBuilder().select().from(TABLE_NAME).toString();
}

export const getExpenseById = (id: any) => {
    return dex.queryBuilder().select().from(TABLE_NAME).where({id: id}).limit(1).toString();
}

export const addExpense = (criteria: any) => {
    return dex.queryBuilder().insert(criteria).into(TABLE_NAME).toString()
}

export const updateExpense = (id:any, criteria: any) => {
    return dex.queryBuilder().update(criteria).into(TABLE_NAME).where({id: id}).toString()
}

export const removeExpense = (id: any) => {
    return dex.queryBuilder().delete().from(TABLE_NAME).where({id: id}).toString()
}