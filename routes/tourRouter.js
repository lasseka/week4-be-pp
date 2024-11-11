const express = require('express');
const router = express.Router();
const {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour,
  } = require("../controllers/tourControllers")
  const { authorizeUsersAccess } = require("../middleware/auth");
  //router.use(authorizeUsersAccess)

// ROUTES
// GET /tours
router.get("/", getAllTours);

// POST /tours
router.post("/", authorizeUsersAccess, createTour);

// GET /tours/:tourId
router.get("/:tourId", authorizeUsersAccess, getTourById);

// PUT /tours/:tourId
router.put("/:tourId", authorizeUsersAccess, updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", authorizeUsersAccess, deleteTour);
module.exports = router;
