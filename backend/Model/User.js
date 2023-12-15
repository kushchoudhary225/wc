import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss : {
        type: String,
    },
    nbf: {
        type: String
    },
    
    aud: {
        type: String,
        required : true,
    },
    email: {
        type: String
    },
    name: {
        type: String,
        required : true,
    },
    picture : {
        type : String,
        required : true,
    },
    family_name : {
        type : String,
    },
    iat : {
        type : Number
    },
    jti : {
        type : String,
    },
    sub : {
        type : String, 
        required: true,
    }
    
})

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);
export default UserModel;