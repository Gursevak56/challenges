import { model,Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    comments:[{
        description:{
            type:String
        },
        participant:{
            type:Schema.Types.ObjectId
        },
        DateAndTime:{
            type:Date,
            default:Date.now()
        }
    }],
    tag:{
        type: String
    }
})

export default model('blog',blogSchema)