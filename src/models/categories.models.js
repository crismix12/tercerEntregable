const db = require('../utils/database');
const { DataTypes } = require("sequelize");
const Courses = require('./courses.models');

const Categories = db.define('categories', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Courses,
          key: 'id'
        },
        field: "course_id"
      }
},
{
    timestamps: false,
})

module.exports = Categories;

