const { 
    _getAllUsers,
    _getByIdUser,
    _createUser,
    _updateUser,
    _deleteUser,
} = require('../repositories/userRepository');

const getUsers = async (req, res, next) => {
    try {
        const users = await _getAllUsers()
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error)
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await _getByIdUser(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error)
    }
};

const createUser = async (req, res, next) => {
    const u = req.body;
    try {
        const user = await _createUser(u);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error)
    }
};

const editUser = async (req, res, next) => {
    const u = req.body;
    try {
        const user = await _updateUser(req.params.id, u)
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    };
};

const deleteUser = async (req, res, next) => {
    try {
        _deleteUser(req.params.id);
        res.status(200).send({id: req.params.id});
    } catch (error) {
        console.error(`Error ${error}`);
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
}