const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Gil',
        email: 'gil@gmail.com',
    },
    {
        username: 'Warrick',
        email: 'warrick@gmail.com'
    },
    {
        username: 'Sara',
        email: 'sara@gmail.com'
    },
    {
        username: 'Greg',
        email: 'greg@gmail.com'
    },
    {
        username: 'Nick',
        email: 'nick@gmail.com'
    },
    {
        username: 'Catherine',
        email: 'catherine@gmail.com'
    },
    {
        username: 'Horatio',
        email: 'horatio@gmail.com'
    },
    {
        username: 'JimB',
        email: 'jimB@gmail.com'
    },
    {
        username: 'Morgan',
        email: 'morgan@gmail.com'
    },
    {
        username: 'Hodges',
        email: 'hodges@gmail.com'
    },
    {
        username: 'Raymond',
        email: 'raymond@gmail.com'
    },
  ]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(users);

    console.info('Seeding complete! 🌱');
    process.exit(0);
  });