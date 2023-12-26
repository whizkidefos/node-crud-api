const User = require('../models/user');

//============ CRUD Controllers
// get all users
exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({ users: users });
        })
        .catch(err => console.log(err));
};

// get single user
exports.getUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ user: user });
        })
        .catch(err => console.log(err));
};

// create user
exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    User.create({
        name: name,
        email: email,
    })
        .then(result => {
            console.log('Created User');
            res.status(201).json({
                message: 'User created successfully!',
                user: result,
            });
        })
        .catch(err => console.log(err));
};

// update user
exports.updateUser = (req, res, next) => {
    const userId = req.params.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            user.name = updatedName;
            user.email = updatedEmail;
            return user.save();
        })
        .then(result => {
            console.log('UPDATED USER!');
            res.status(200).json({ message: 'User updated!', user: result });
        })
        .catch(err => console.log(err));
};

// delete user
exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            return user.destroy({
                where: { id: userId }
            });
        })
        .then(result => {
            console.log('DESTROYED USER');
            res.status(200).json({ message: 'Deleted user.' });
        })
        .catch(err => console.log(err));
};