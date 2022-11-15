const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Users = require("./users.models")
const UsersCourses = require("./userscourses.models");
const Videos = require("./videos.models");



const initModels = () => {
    // mant to many relationship
    Users.hasMany(UsersCourses, 
        {
            as: "courses", 
            foreignKey: "user_id"
        });
    UsersCourses.belongsTo(Users, 
        {
            as: "user", 
            foreignKey: "user_id"
        });

    Courses.hasMany(UsersCourses, 
        {
            as: "users", 
            foreignKey: "course_id"
        });
    UsersCourses.belongsTo(Courses, 
        {
            as: "course", 
            foreignKey: "course_id"
        });
    
    //one to many relationship
    Courses.hasMany(Categories, {
        as: "categories",
        foreignKey: "course_id"
    });
    Categories.belongsTo(Courses, {
        as: "course",
        foreignKey: "course_id"
    });


    Courses.hasMany(Videos, {
        as: "videos",
        foreignKey: "course_id"
    });
    Videos.belongsTo(Courses, {
        as:"course",
        foreignKey: "course_id"
    });
}

module.exports = initModels