const bcrypt = require('bcrypt-nodejs');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

var hash = bcrypt.hashSync("bacon");

bcrypt.compareSync("bacon", hash); // true
console.log(bcrypt.compareSync("bacon", hash)) // true)
bcrypt.compareSync("veggies", hash); // false

// nodejs sha256
// jsonwebtoken
// md5 hash
