import fs from 'fs';
import knex from 'knex';
// import yaml from 'js-yaml';

export class db {
    db

    constructor(){
        const db = knex({client: 'mysql2',
        connection: {
          host : '127.0.0.1',
          port : 3307,
          user : 'radr-user',
          password : 'password',
          database : 'radr'
        },
          });
          this.db= db;
    }

    getDB(){
        return this.db
    }

}