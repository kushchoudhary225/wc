import mongoose from 'mongoose'

const MessageSchema = mongoose.Schema({
    conversationId : {
        type:String
    },
    senderId : {
        type:String
    },
    receiverId : {
        type:String
    },
    text : {
        type:String
    },
    type: {
        type:String
    }
}, {
    timestamps : true,
})

const MessageModel = mongoose.models.message || mongoose.model('message', MessageSchema)
export default MessageModel;