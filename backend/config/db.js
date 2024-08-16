const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'events',
    dateStrings:'date',
    
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    }
    console.log('Database connected');
});

module.exports = db;