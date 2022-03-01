const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "228*98Hb",
    host: "localhost",
    port: 5432,
    database: "bugtracker"
});

module.exports = pool;