const VideosServices = require("../Services/videos.services");


const createVideo = async(req, res) => {
    try {
        const video = req.body;
        const response = VideosServices.create(video);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const deleteVideo = async(req, res) => {
    try {
        const { id } = req.params;
        const response = VideosServices.delete(id);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createVideo,
    deleteVideo
}