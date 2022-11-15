const Categories = require("../models/categories.models");


class CategoriesServices {
    static async create(video){
        try {
            const result = Categories.create(video);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async delete(id){
        try {
            await Categories.destroy({
                where: {id}
            });
            return [];
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = CategoriesServices;