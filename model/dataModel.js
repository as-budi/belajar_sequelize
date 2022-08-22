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

// branch.belongsTo(employee, {
//     foreignKey: "mgr_id",
//     references: {
//         model: "employee",
//         key: "id"
//     },
//     onDelete: "SET NULL"
// });

// employee.belongsTo(branch, {
//     foreignKey: "branch_id",
//     references: {
//         model: "branch",
//         key: "id"
//     },
//     onDelete: "SET NULL"
// });

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

export {employee, branch, client, works_with, branch_supplier};


