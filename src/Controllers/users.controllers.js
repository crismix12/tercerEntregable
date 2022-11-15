const CoursesServices = require("../Services/courses.services");
const UsersServices = require("../Services/users.services");


const getUserById = async(req, res) =>{
    const { id } = req.params;
    try {
        const result = await UsersServices.getById(id);
        res.status(200).json(result);   
    } catch (error) {
        console.log(error);
    }
}

const getUsersWithCourses = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await UsersServices.getUsersJoinCourses(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async(req, res) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.add(newUser);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const result = await UsersServices.update(newData, id);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

const addUsersCourse = async (req, res) =>{
    try {
        const { courseId } = req.params;
        const { userId } = req.body;
        // console.log(userId);
        const respId = await CoursesServices.getCourseById(courseId);
        // console.log(respId);
        const result = await UsersServices.addCourse(userId, respId);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserById,
    getUsersWithCourses,
    createUser,
    updateUser,
    addUsersCourse
}