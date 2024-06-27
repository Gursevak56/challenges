import express from 'express'
import { createEvents, createMeeting, createParticipants, getMeetingOfAUserById } from '../controllers/events'
const route = express.Router()

route.route('/createEvents').post(createEvents)
route.route('/createMeeting').post(createMeeting)
route.route('/createPart').post(createParticipants)
route.route('/get/:id').get(getMeetingOfAUserById)
export default route