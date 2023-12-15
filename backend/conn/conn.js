import {connect} from 'mongoose'

const dbConnect = async () => {
    try {
        await connect('mongodb://localhost:27017/chat')
        console.log("db connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnect;