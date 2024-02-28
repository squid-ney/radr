import fs from 'fs';
import knex from 'knex';
import dotenv from 'dotenv'
import { DB_CLIENT, DB_CONNECTION} from './constants';
dotenv.config()

export class db {
    db

    constructor(){
        const db = knex({
        client: DB_CLIENT,
        connection: DB_CONNECTION,
          });
        
        this.db= db;
    }

    getDB(){
        return this.db
    }

}