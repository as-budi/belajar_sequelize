import express from "express";
import db from "./config/dbConnection.js";
import { Users } from "./model/dataModel.js";
import { Branch } from "./model/dataModel.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    await Users.sync();
    await Branch.sync();
} catch (error) {
    console.error(error);
}

app.listen(3001, () => console.log('Server running at port 3001...'));