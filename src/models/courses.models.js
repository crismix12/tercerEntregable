const db = require('../utils/database');
const { DataTypes } = require("sequelize");

const Courses = db.define('courses', {
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
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instructor: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

module.exports = Courses;
