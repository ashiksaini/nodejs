import mysql from "mysql2";

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'learning',
    password: 'Ashik1506@',
}).promise();
