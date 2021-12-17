const { User, Post } = require('../models')

async function seeder() {
  console.log('----Seeding Data----')

  await User.register(new User({ username: 'johndoe', email: 'johndoe@gmail.com' }), 'password1234')
  await User.register(new User({ username: 'janedoe', email: 'janedoe@gmail.com' }), 'password4321')
  await User.register(new User({ username: 'jackdoe', email: 'jackdoe@gmail.com' }), 'rootroot')

  await Post.bulkCreate(require('./postSeed.js'))

  console.log('----Data Seeded----')

  process.exit()
}

seeder()
