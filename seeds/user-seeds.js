const { User } = require('../models');

const userData = [{
        username: 'bailey',
        password: 'bailey'

    },
    {
        username: 'Andrew',
        password: 'andrew'
    },
    {
        username: 'Bob',
        password: 'bobbb'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;