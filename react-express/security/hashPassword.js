const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  var rounds = 10
  try {
    var incript = bcrypt.genSalt(rounds);
    var hashedPassword = bcrypt.hash(incript, password)
    return hashedPassword;
  }
  catch (e) {
    console.log(e);
  }
}


module.exports = { hashPassword };