import { Sequelize } from "sequelize";
import db from "../config/dbConnection.js";

const { DataTypes } = Sequelize;

const Users = db.define('user', {
    first_name: {
        type: DataTypes.STRING(40)
    },
    last_name: {
        type: DataTypes.STRING(40)
    },
    birth_day: {
        type: DataTypes.DATEONLY
    },
    sex: {
        type: DataTypes.STRING(1)
    },
    salary: {
        type: DataTypes.INTEGER
    },
    super_id: {
        type: DataTypes.INTEGER
    },
    branch_id: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

const Branch = db.define('branch', {
    branch_name: {
        type: DataTypes.STRING(40)
    },
    mgr_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        },
        onDelete: "SET NULL"
    },
    mgr_start_date: {
        type: DataTypes.DATEONLY
    }
}, {
    freezeTableName: true
});

export {Users, Branch};


