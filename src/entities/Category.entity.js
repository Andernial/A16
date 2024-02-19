import { DataTypes } from "sequelize";
import { seque as database } from "../database/connection.js";



export const CategoryEntity = database.define("Category", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: database.Sequelize.UUIDV4,
        primaryKey: true

    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
})