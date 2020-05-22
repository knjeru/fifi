import { dbClient } from "../config/db.config.ts"
import { createDebtTableQuery, createDebt, getAllDebts, getDebtById, updateDebt, removeDebt } from "../models/debt.model.ts";
import { mapResultToJSON } from "./utils.ts";


export class Debts {


    public createDebtsTable = async ({
        params,
        request,
        response,
      }: {
        params: any
        request: any
        response: any
      }) => {
        try {
            let sqlQuery = createDebtTableQuery();
            dbClient.query(sqlQuery);
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public getAllDebts = async ({
        params,
        request,
        response,
      }: {
        params: any
        request: any
        response: any
      }) => {
        try {
            let sqlQuery = getAllDebts();
            let result = await dbClient.query(sqlQuery);
            response.body = mapResultToJSON(result)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public getDebt = async ({
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
            const sqlQuery = getDebtById(params.id);
            let result = await dbClient.query(sqlQuery);
            response.body = mapResultToJSON(result)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public addDebt = async ({
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
            let sqlQuery = createDebt(body.value)
            await dbClient.query(sqlQuery)
        } catch(err) {
            console.log('err->>>', err)
        }
    }

    public updateDebt = async ({
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
            let sqlQuery = updateDebt(params.id, body.value)
            await dbClient.query(sqlQuery)
        } catch(err) {
            console.log('err->>>', err)
        }
    }

    public removeDebt = async ({
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
            let sqlQuery = removeDebt(params.id)
            await dbClient.query(sqlQuery)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

}