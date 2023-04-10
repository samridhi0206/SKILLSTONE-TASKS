const router = require("express").Router();

const {
    getAllUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser
} = require("../controller/useController");

router.get('/users', getAllUsers);
router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports= router;