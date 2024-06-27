import { Request,Response } from "express"
import blog from "../models/blog"
import { isJSDocThisTag } from "typescript"
export const createBlog = async (req:Request,res:Response) =>{
    const {
        title,
        description,
        tag
    } = req.body
   const newBlog = await blog.create({
        title,
        description,
        tag
    })
}

export const updateBlog = async (req:Request,res:Response) =>{
    const blogId = req.params.id
    const {
        title,
        description,
        tag,
        comment,
    } = req.body
    const fieldToUpdate = {
        ...(title&&{title}),
        ...(description&&{description}),
        ...(comment&&{comment}),
        ...(tag&&{isJSDocThisTag})
    }

   const updateBlog = await blog.updateOne({_id:blogId},fieldToUpdate)
   console.log(updateBlog)
   res.status(200).json({
    success:true,
    updateBlog
   })
}

