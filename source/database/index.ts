import * as dotenv from "dotenv";
dotenv.config();
import { Pool, QueryResult } from "pg";

const databaseCredentials = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(<string>process.env.DATABASE_PORT),
};

const execute = async (
    query: string,
    parameters?: any
): Promise<QueryResult> => {
    let queryResult: QueryResult = {
        command: "",
        rowCount: 0,
        oid: 0,
        fields: [],
        rows: [],
    };
    const pool = new Pool(databaseCredentials);
    try {
        queryResult = queryResult = await pool.query(query, parameters);
    } catch (error) {
        console.log(error);
    } finally {
        await pool.end();
    }
    return queryResult;
};

export default {
    execute,
};