import express from 'express'
import { createBlog, updateBlog } from '../controllers/blog'

const router = express.Router()
 
router.route('/createblog').post(createBlog)
router.route('/updateblog').put(updateBlog)

export default router