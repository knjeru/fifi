import { dbClient } from "../config/db.config.ts"
import { mapResultToJSON } from "./utils.ts";
import { createUserFinancialProfileTableQuery, getUserFinancialProfile, addUserFinancialProfile, updateUserFinancialProfile, removeUserFinancialProfile } from "../models/user-financial-profile.model.ts";



export class UserFinancialProfile {

    public createUserFinancialProfileTable = async ({
        params,
        request,
        response,
      }: {
        params: any
        request: any
        response: any
      }) => {
        try {
            let sqlQuery = createUserFinancialProfileTableQuery();
            dbClient.query(sqlQuery);
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public getUserFinancialProfile = async ({
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
            const sqlQuery = getUserFinancialProfile(params.id);
            let result = await dbClient.query(sqlQuery);
            response.body = mapResultToJSON(result)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

    public addUserFinancialProfile = async ({
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
            let sqlQuery = addUserFinancialProfile(body.value)
            await dbClient.query(sqlQuery)
        } catch(err) {
            console.log('err->>>', err)
        }
    }

    public updateUserFinancialProfile = async ({
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
            let sqlQuery = updateUserFinancialProfile(params.id, body.value)
            await dbClient.query(sqlQuery)
        } catch(err) {
            console.log('err->>>', err)
        }
    }

    public removeUserFinancialProfile = async ({
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
            let sqlQuery = removeUserFinancialProfile(params.id)
            await dbClient.query(sqlQuery)
        } catch (err) {
            console.log('err->>>', err)
        }
    }

}