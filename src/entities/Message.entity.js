import { DataTypes } from "sequelize";
import { seque as database } from "../database/connection.js";



export const MessageEntity = database.define("Message", {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: database.Sequelize.UUIDV4,
        primaryKey: true

    },
    sender_id:{
        type: DataTypes.STRING(50),
        allowNull: false,

    },
    receiver_id:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    favorite:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }



    
})