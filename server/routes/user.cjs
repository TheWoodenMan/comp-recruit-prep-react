const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.cjs");

const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // router.get("/feedback", feedbackController.fetchFeedback);

router.post("/register", jsonParser, userController.registerUser);

// login endpoint
router.post("/login", jsonParser, userController.loginUser);

// router.delete("/feedback/:id", feedbackController.deleteFeedback);

// router.put("/feedback/:id", feedbackController.updateFeedback);

module.exports = router;
