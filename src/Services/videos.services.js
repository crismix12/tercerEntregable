const Videos = require("../models/videos.models");

class VideosServices {
    static async create(video){
        try {
            const result = Videos.create(video);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async delete(id){
        try {
            await Videos.destroy({
                where: {id}
            });
            return [];
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = VideosServices;