const util = require('util');
const fs = require('fs');
const md5 = require('md5');

const verify = async (user) => {
  const users = await getUsers();
  console.log('Verify users from file: ' + users);
  const enteredPassword = md5(user.password);

  if (users.name === user.name && users.password === enteredPassword) {
    console.log('Logged in succesfully');
  } else {
    console.log('Failed to login');
  }
};

const getUsers = async () => {
  const readFile = util.promisify(fs.readFile);
  try {
    const data = JSON.parse(await readFile('./users.json'));
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = verify;
