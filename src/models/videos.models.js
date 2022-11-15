const db = require('../utils/database');
const { DataTypes } = require("sequelize");
const Courses = require('./courses.models');

const Videos = db.define('videos', {

    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
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
});

module.exports = Videos;

