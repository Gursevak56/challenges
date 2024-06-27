import express from 'express'
import events from './events'
import blog from './blog'
const router = express.Router()
router.use('/events',events)
router.use('/blog',blog)

export default router