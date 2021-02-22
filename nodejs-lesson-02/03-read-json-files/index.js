const fs = require('fs');
const util = require('util');

const getUsersSync = () => {
  const result = fs.readFileSync('./db.json');
  console.log(JSON.parse(result));
};

const getUsersAsync = () => {
  fs.readFile('./db.json', (err, data) => {
    if (err) throw err;
    console.log('Success:\n', JSON.parse(data));
  });
};
const getUsersAsync2 = async () => {
  const readFile = util.promisify(fs.readFile);
  try {
    const data = await readFile('./db.json');
    console.log(JSON.parse(data));
  } catch (error) {
    console.log(err);
  }
};

const main = () => {
  console.log('before');
  getUsersSync();
  getUsersAsync();
  getUsersAsync2();
  console.log('after');
};

main();
