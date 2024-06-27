import { Model,Schema, model } from "mongoose";

const meetingSchema = new Schema({
    participants:
        {
            type:[Schema.Types.ObjectId],
            ref:'participant'
        }
    ,
    dataAndTime:{
        type:Date,
        default:Date.now()
    },
    features:[{
        _id:false,
        name:{
            type:String
        },
        no:{
            type:Number
        }
    }]
})

export default model('meeting',meetingSchema)