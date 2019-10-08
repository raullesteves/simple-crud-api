const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
} = require('../controllers/userController')

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;