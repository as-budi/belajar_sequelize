import { Sequelize } from "sequelize";
import db from "../config/dbConnection.js";

const { DataTypes } = Sequelize;

const employee = db.define('employee', {
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

const branch = db.define('branch', {
    branch_name: {
        type: DataTypes.STRING(40)
    },
    mgr_id: {
        type: DataTypes.INTEGER
        // references: {
        //     model: "employee",
        //     key: "id"
        // },
        // onDelete: "SET NULL"
    },
    mgr_start_date: {
        type: DataTypes.DATEONLY
    }
}, {
    freezeTableName: true
});

const client = db.define('client', {
    client_name: {
        type: DataTypes.STRING(40)
    },
    branch_id: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

const works_with = db.define('works_with', {
    emp_id: {
        type: DataTypes.INTEGER
    },
    client_id: {
        type: DataTypes.INTEGER
    },
    total_sales: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

const branch_supplier = db.define('branch_supplier', {
    branch_id: {
        type: DataTypes.INTEGER
    },
    supplier_name: {
        type: DataTypes.STRING(40)
    },
    supplier_type: {
        type: DataTypes.STRING(40)
    }
}, {
    freezeTableName: true
});

export {employee, branch, client, works_with, branch_supplier};


