import express from 'express'
import events from './events'
const router = express.Router()
router.use('/events',events)

export default router