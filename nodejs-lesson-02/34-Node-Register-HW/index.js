const addUser = require('./register.js');
const verify = require('./login.js');

const user = { name: 'moishe', password: '123' };

addUser({ ...user });

verify({ name: 'moishe', password: '123' });