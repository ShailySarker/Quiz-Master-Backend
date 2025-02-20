const express = require("express");
const router = express.Router();

const {
    getUserProfile,getUserProgress,prevQuizes,leaderboard
} = require("../controllers/userController");

const { auth}  = require('../middleware/authentication');


router.get("/getUserProfile",auth, getUserProfile);
router.get("/getUserProgress",auth,getUserProgress);
router.post("/prevQuizes",auth,prevQuizes);
router.get("/leaderboard",leaderboard);


module.exports = router