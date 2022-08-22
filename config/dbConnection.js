import mysql from "mysql2";
import sequelize from "sequelize";

const HOST = "localhost";
const USER = "root";
const PASSWORD = "root";
const DATABASE = "belajar_sequelize_db";
const DB_SERVER = "mysql";
const PORT = 3306;

const conn = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD
})

conn.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`, (err, res) => {
    console.log(res);
    console.log(err);
})



const db = new sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DB_SERVER,
    port: PORT
})

export default db;