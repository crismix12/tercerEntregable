const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/userscourses.models");


class UsersServices {
    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: [
                    "first_name",
                    "last_name",
                    "email"
                ]
            })
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getUsersJoinCourses(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: [
                    "first_name",
                    "last_name",
                    "email"
                ],
                include:{
                    model: UsersCourses,
                    as: "courses",
                    attributes: ["user_id"],
                    include:{
                        model: Courses,
                        as: "course",
                        attributes:["title"]
                    }
                }
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async add(newUser){
        try {
            const result = Users.create(newUser);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(updateData, id){
        try {
            const result = await Users.update(updateData, {
                where: { id },
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async addCourse(userId, cId){
        try {
            // console.log(courseId, userId);
            // const {id} = courseId;
            const courseId = cId.id;
            // console.log(courseId);
            // console.log(id);
            // console.log("--------");
            // console.log(userId);
            const data = 
            {
                    "userId": userId,
                    "courseId": courseId
            }
            const result = await UsersCourses.create(data);
            return result;
        } catch (error) {
            throw(error);
        }
    }
}


module.exports = UsersServices;