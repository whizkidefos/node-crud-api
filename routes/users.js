const controller = require('../controllers/users');
const router = require('express').Router();

//============ CRUD Routes /users
router.get('/', controller.getUsers); // get all users
router.get('/:userId', controller.getUser); // get single user
router.post('/', controller.createUser); // create user
router.put('/:userId', controller.updateUser); // update user
router.delete('/:userId', controller.deleteUser); // delete user

module.exports = router;