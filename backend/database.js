 // database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "wad_user",
    password: "LTAT.05.004",
    database: "wadHW4",
    host: "localhost",
    port: "5432"
});

module.exports = pool;