
export const DB_CONNECTION = {
    host : '127.0.0.1',
    port : 3307,
    user : process.env.username,
    password : process.env.password,
    database : process.env.database
  }

export const DB_CLIENT = 'mysql2'