import ConversationModel from "../Model/Conversation.js";

export const newConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body;

        const exist = await ConversationModel.findOne({members : {$all : [receiverId, senderId]}});

        if(exist) {
            return res.status(200).json({msg : 'conversatino already exist'})
        }

        const newChat = await ConversationModel.create({
            memebers : [senderId, receiverId]
        }) 
        return res.status(200).json({msg : 'conversatino saved successfully', newChat})

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success : false,
            msg : error.message})
    }
} 

export const getConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body;

        const chat = await ConversationModel.findOne({memebers : {$all : [receiverId, senderId]}})
        return res.status(200).json({msg : 'conversatino saved successfully', chat})

    } catch (error) {
        return res.status(200).json({msg : 'conversatino saved successfully', error : error.message})
    }
}