const User = require('./../models/userSchema');

const _getAllUsers = () => {
    return User.find();
};

const _getByIdUser = (id) => {
    return User.findById(id);
};

const _createUser = (user) => {
    return User.create(user);
};

const _updateUser = (id, user) => {
    const updatedUser = {
        name: user.name,
        mail: user.mail,
        role: user.role,
    };
    return User.findByIdAndUpdate(id, updatedUser, { new: true, useFindAndModify: false });
};

const _deleteUser = (id) => {
    return User.findByIdAndRemove(id, (error) => {
        console.log(error);
    })
};

module.exports = {
    _getAllUsers,
    _getByIdUser,
    _createUser,
    _deleteUser,
    _updateUser,
}

