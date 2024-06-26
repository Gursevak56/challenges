import express from 'express'
import { createEvents } from '../controllers/events'
const route = express.Router()

route.route('/createEvents').post(createEvents)

export default route