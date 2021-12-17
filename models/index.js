// bringing in both post and user models
const User = require('./User.js')
const Post = require('./Post.js')

// identifying one to many relationship for User
User.hasMany(Post, { foreignKey: 'uid' })
// identifying many to one relationship for Post
Post.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Post }
