import express from "express";
import db from "./config/dbConnection.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.listen(3001, () => console.log('Server running at port 3001...'));