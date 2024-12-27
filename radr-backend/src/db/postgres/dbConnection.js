"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CLIENT = exports.DB_CONNECTION = void 0;
exports.DB_CONNECTION = {
    host: "127.0.0.1",
    port: 3307,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database,
};
exports.DB_CLIENT = "mysql2";
