import { dbClient } from "../config/db.config.ts"
import { mapResultToJSON } from "./utils.ts";
import { createExpenseTableQuery, getAllExpenses, getExpenseById, addExpense, updateExpense, removeExpense } from "../models/expense.model.ts";


export class Expenses {


    public createExpensesTable = async ({
        params,
        request,
        response,
      }: {
        params: any
        request: any
        response: any
      }) => {
        try {
            let sqlQuery = createExpenseTableQuery();
            dbClient.query(sqlQuery);
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public getAllExpenses = async ({
        params,
        request,
        response,
      }: {
        params: any
        request: any
        response: any
      }) => {
        try {
            let sqlQuery = getAllExpenses();
            let result = await dbClient.query(sqlQuery);
            response.body = mapResultToJSON(result)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public getExpense = async ({
        params,
        request,
        response,
      }: {
        params: {
            id: string;
        }
        request: any
        response: any
      }) => {
        try {
            const sqlQuery = getExpenseById(params.id);
            let result = await dbClient.query(sqlQuery);
            response.body = mapResultToJSON(result)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public addExpense = async ({
        params,
        request,
        response,
      }: {
        params: any
        request: any
        response: any
      }) => {        
        try {
            const body =  await request.body()
            let sqlQuery = addExpense(body.value)
            await dbClient.query(sqlQuery)
        } catch(err) {
            console.log('err->>>', err)
        }
    }

    public updateExpense = async ({
        params,
        request,
        response,
      }: {
        params: {
            id: any
        }
        request: any
        response: any
      }) => {        
        try {
            const body =  await request.body()
            let sqlQuery = updateExpense(params.id, body.value)
            await dbClient.query(sqlQuery)
        } catch(err) {
            console.log('err->>>', err)
        }
    }

    public removeExpense = async ({
        params,
        request,
        response,
      }: {
        params: {
            id: string;
        }
        request: any
        response: any
      }) => {
        try {
            let sqlQuery = removeExpense(params.id)
            await dbClient.query(sqlQuery)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

}