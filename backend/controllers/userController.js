
import UserModel from '../Model/User.js';


export const addUser = async (req, res) => {
    try {
        const exist = await UserModel.findOne({sub : req.body.sub});
        if(exist) {
            return res.status(200).json({success: true, msg : 'user already exists...'})
        }

        const newUser = await UserModel.create(req.body);
        return res.status(201).json({success : true,
        msg : 'User Created', newUser})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success : false,
            msg : error.message})
    }
}
export const getUser = async (req, res) => {
    try {
        const users = await UserModel.find({});
        return res.status(200).json({success: true, users})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success : false,
            msg : error.message})
    }
}