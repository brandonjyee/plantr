const db = require('./model');

db.sync({force: true})
    .then(() => {
        console.log("DATABASE SYNCED")})
    .catch(() => console.log("DISASTER! SOMETHING WENT WRONG"))
    .finally(() => db.close());