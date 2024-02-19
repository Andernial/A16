import {Router} from "express"
import { createCategory } from "../controllers/category.controller.js";

const CategoryRoute = Router();

CategoryRoute.post("/category", async (req,res)=>{
    const {name} = req.body;
    const category = await createCategory(name)
    res
    .status(201)
    .json({
        message: "Category created sucessfully",
        category
    })
})



export {CategoryRoute}