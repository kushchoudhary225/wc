import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'

const storage = new GridFsStorage({
    url : 'mongodb://localhost:27017/chat',
    file : (req, file) => {
        const match = ["image/png", "image/jpeg", "image/jpg"];

        if(match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-file ${file.originalname}`;
        }

        return {
            bucketname : "photos",
            filename : `${Date.now()}-file ${file.originalname}`
        }
    }
})

export default multer({storage})