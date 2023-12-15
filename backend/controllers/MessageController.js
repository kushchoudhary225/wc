import MessageModel from '../Model/Message.js'
export const newMessage = async (req, res) => {
    try {
        const newMsg = await MessageModel.create(req.body);
        await ConversationModel.findByIdAndUpdate(req.body.conversationId, {message : req.body.text})
        return res.status(200).json({newMsg})
    } catch (error) {
        return res.status(500).json({msg : error.message})
        
    }
}

export const getMessage = async (req, res) => {
    try {
        const messages = await MessageModel.find({conversationId : req.params.id});
        return res.status(200).json({messages})
    } catch (error) {
        return res.status(500).json({msg : error.message})
        
    }
}
