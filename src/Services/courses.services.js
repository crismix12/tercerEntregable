const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");


class CoursesServices {
    // static async add(course){
    //     try {
    //         const result = await Courses.create(course);
    //     } catch (error) {
    //         throw(error);
    //     }
    // }

    static async getAll(){
        try {
            const result = await Courses.findAll({
                attributes: ["title", "description", "instructor"]
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }


    static async getCoursesJoinVideos(){
        try {
            const result = await Courses.findAll({
                attributes: ["title", "description", "instructor"],
                include:{
                    model: Videos,
                    as: "videos",
                    attributes: {
                        exclude: ["id","courseId", "course_id"]
                    }
                }
            })
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getCoursesJoinCategories(){
        try {
            const result = await Courses.findAll({
                attributes: ["title", "description", "instructor"],
                include: {
                    model: Categories,
                    as: "categories",
                    attributes:{
                        exclude: [
                            "id", "course_id"
                        ]
                    }
                }
            })
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async create(course){
        try {
            const result = await Courses.create(course);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async update(updateData, id){
        try {
            const result = await Courses.update(updateData, {
                where: { id },
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCourseById(id){
        try {
            const result = await Courses.findByPk(id, {
                attributes: [
                    "id"
                ]
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = CoursesServices;