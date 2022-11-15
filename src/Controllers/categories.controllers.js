const CategoriesServices = require("../Services/categories.services");


const createCategory = async(req, res) => {
    try {
        const video = req.body;
        const response = CategoriesServices.create(video);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const response = CategoriesServices.delete(id);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createCategory,
    deleteCategory
}