import { DataTypes } from "sequelize";
import { seque as database } from "../database/connection.js";



export const UserEntity = database.define("User", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: database.Sequelize.UUIDV4,
        primaryKey: true

    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(20)
    },
    email:{
        type: DataTypes.STRING(30)
    },
    relationship:{
        type: DataTypes.BOOLEAN
    }



    
})