import {model,Schema} from 'mongoose'

const participantSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    role:{
        type:String,
        enum:['USER','ADMIN']
    }
})

export default model('participant',participantSchema)
