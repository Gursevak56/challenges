import mongoose, { model,Schema } from "mongoose";

const eventSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    dataAndTime: {
        type:Date,
        default: Date.now()
    }
},{
    timestamps:true
})

export default model('Event',eventSchema)