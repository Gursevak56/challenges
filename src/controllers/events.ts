import { Request,Response } from "express"
import Event from "../models/Event"
import meeting from "../models/meeting"
import participant from "../models/participant"
import mongoose from "mongoose"
export const createEvents = async (req:Request,res:Response) => {
    const {
        title,
        description,
        dataAndTime
    } = req.body
  const newEvent =  await Event.create({
        title:title,
        description:description,
        dataAndTime:dataAndTime
    })
    if(!newEvent) return res.status(204).json({
        success:true,
        newEvent
    })
}

export const upcommingEvents = async (req:Request,res:Response) => {
  const upcommingEvents =  await Event.find({dataAndTime:{$gt:Date.now()}})

  res.status(200).json({
    success:true,
    events:upcommingEvents
  })
}

export const createMeeting = async (req:Request,res:Response)=>{

    const {
        dataAndTime,
        participants,
        features
    } = req.body
    console.log(req.body)
     const newMeeting =   new meeting({
            dataAndTime:dataAndTime,
            participants:participants,//array of objectId
            features:features //array of objects
        })
        
      let meet =  await newMeeting.save()
        res.status(204).json({
            success:true,
            newMeeting:meet
        })
}

export const createParticipants = async (req:Request,res:Response) =>{
const {
    name,
    email,
    role
} = req.body
console.log(req.body)
const newParticipants = await participant.create({
    name,
    email,
    role
})
res.status(200).json({
    success:true,
    newParticipants
})
}

export const getMeetingOfAUserById  = async (req:Request,res:Response) =>{
    const participantId = req.params.id
    console.log(participantId)
   const meetings = await meeting.find({participants:participantId}).populate('participants')
   console.log(meetings)
   res.status(200).json({
    success:true,
    meetings
   })
}



