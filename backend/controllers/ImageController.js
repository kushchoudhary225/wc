const url = "http://localhost:8000"
export const uploadFile = async(req, res) => {
try {
    if(!req.file) {
        return res.status(404).json("file not found");
    }
    const imageUrl  = `${url}/file/${req.file.filename}`;
    return res.status(200).json(imageUrl)
} catch (error) {
    console.log(error.message);
}
}