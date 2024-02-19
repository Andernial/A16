import { seque as database } from "../database/connection.js";
import { CategoryEntity } from "../entities/Category.entity.js";


export const createCategory = async (name) =>{
    await database.sync()
    const newCategory = CategoryEntity.create({
        name
    });
    return await newCategory
}

export const getAllCategories = async () =>{
    return await CategoryEntity.findAll();
}

export const getCategoryById = async (idCategory) =>{
    return await CategoryEntity.findByPk(id)
}

export const getCategoryByname = async (name) =>{
    return await CategoryEntity.findOne({
        where: {
            name
        }
    })
}