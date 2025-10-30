const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  console.log("🔥 hashPassword input:", password);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  console.log("✅ hashPassword output:", hash); // log debug
  return hash;
};
const comparePassword = (password, hash) => {
  const result = bcrypt.compareSync(password, hash);
  return result;
};
module.exports = { hashPassword, comparePassword };
