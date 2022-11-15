const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");


const UsersCourses = db.define(
    "users_courses",
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: Users,
              key: 'id'
            },
            field: 'user_id'
          },
          courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: Courses,
              key: 'id'
            },
            field: 'course_id'
          },
          completePercentage: {
            type: DataTypes.INTEGER,
            field: 'complete_percentage',
            defaultValue: 0
          },
          review: {
            type: DataTypes.STRING,
            allowNull: true
          }
    },
    {
        timestamps: false,
    }
)

module.exports = UsersCourses;