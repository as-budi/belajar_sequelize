import express from "express";
import db from "./config/dbConnection.js";
// import { employee, branch, client, works_with, branch_supplier } from "./model/dataModel.js";


const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

// try {
//     await employee.sync();
//     console.log('Table employee is created')
// } catch (error) {
//     console.error(error);
// }

// try {
//     await branch.sync();
//     console.log('Table branch is created')
// } catch (error) {
//     console.error(error);
// }

// try {
//     await client.sync();
//     console.log('Table client is created')
// } catch (error) {
//     console.error(error);
// }

// try {
//     await works_with.sync();
//     console.log('Table works_with is created')
// } catch (error) {
//     console.error(error);
// }

// try {
//     await branch_supplier.sync();
//     console.log('Table branch_supplier is created')
// } catch (error) {
//     console.error(error);
// }

app.listen(3001, () => console.log('Server running at port 3001...'));