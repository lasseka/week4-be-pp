const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/userControllers")
  const { authorizeUsersAccess } = require("../middleware/auth");
  //router.use(authorizeUsersAccess)

// ROUTES
// GET /tours
router.get("/", getAllUsers);

// POST /tours
router.post("/", authorizeUsersAccess, createUser);

// GET /tours/:tourId
router.get("/:userId", authorizeUsersAccess, getUserById);

// PUT /tours/:tourId
router.put("/:userId", authorizeUsersAccess, updateUser);

// DELETE /tours/:tourId
router.delete("/:userId", authorizeUsersAccess, deleteUser);
module.exports = router;
