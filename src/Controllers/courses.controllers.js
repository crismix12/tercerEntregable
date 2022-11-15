const CoursesServices = require("../Services/courses.services");


const getAllCourses = async (req, res) =>
{
    try {
        const result = await CoursesServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getAllCoursesWithVideos = async (req, res) => {
    try {
        const result = await CoursesServices.getCoursesJoinVideos();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getAllCoursesWithCategories = async (req, res) => {
    try {
        const result = await CoursesServices.getCoursesJoinCategories();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createCourse = async (req, res) => {
    try {
        const course = req.body;
        const result = await CoursesServices.create(course);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const newData = req.body;
        const result = await CoursesServices.update(newData, id);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCourses,
    getAllCoursesWithVideos,
    getAllCoursesWithCategories,
    createCourse,
    updateCourse
}