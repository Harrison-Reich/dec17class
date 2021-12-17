// bring in user and post models
const User = require('./User.js')
const Post = require('./Post.js')

// identify one to many relationship for user
User.hasMany(Post, { foreignKey: 'uid' })
// identify many to one relationship for posts
Post.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Post }
