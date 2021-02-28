const fs = require('fs');
const util = require('util');
const md5 = require('md5');

const addUser = async (user) => {
  const writeFile = util.promisify(fs.writeFile);
  user.password = md5(user.password);
  try {
    const stringifyedUser = JSON.stringify(user);
    const data = await writeFile('./users.json', stringifyedUser);
    console.log('User added.');
  } catch (error) {
    console.log(error);
  }
};

module.exports = addUser;
