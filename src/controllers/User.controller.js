import { seque as database } from "../database/connection.js";
import { UserEntity } from "../entities/User.entity.js";



export const createUser = async (req,res) =>{
    await database.sync()
   
    const {name, password, email, relationship} = req.body
    const newUser = await UserEntity.create({
        name, password, email, relationship

    });
    res.json(newUser)
}


export const getAllUsers = async (req,res) =>{
    const users = await UserEntity.findAll();
    res.json({users})
}

export const getUserById = async (req,res) =>{
    const { id } = req.params
    const user = await UserEntity.findByPk(id)

    res.json({user})
}


export const updateName = async (req,res) =>{
    const { id } = req.params
    const { name } = req.body
 
    await UserEntity.update({name},{
        where: {
            id
        }
    });
    const user = await UserEntity.findByPk(id)
    res.json({user})
}

export const deleteColumn = async (req,res) =>{
    const { id } = req.params
    await UserEntity.destroy({
        where:{
            id
        }
    })
   
    res.json({message:'Usuario deletado com sucesso'})
}

