// creating connection between front and backend with database
const { Sequelize } = require('sequelize')

module.exports = new Sequelize('mysql://root:rootroot@localhost:3306/blog_db')
