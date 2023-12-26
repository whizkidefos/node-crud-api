const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow any domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// test route
app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

//============ CRUD Routes
app.use('/users', require('./routes/users'));

// error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

// sync models to database
sequelize
    .sync()
    .then(result => {
        console.log('Sequelize models synced to PostgreSQL database.');
        app.listen(3000);
    })
    .catch(err => console.log(err));