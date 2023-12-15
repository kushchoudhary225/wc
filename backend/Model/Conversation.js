import mongoose from "mongoose";

const schema =  mongoose.Schema({
    memebers : {
        type : Array
    }, 
    message : {
        type: String,

    }

},
    {
        timestamps : true
    }
)

const ConversationModel = mongoose.model('conversation', schema)
export default ConversationModel;