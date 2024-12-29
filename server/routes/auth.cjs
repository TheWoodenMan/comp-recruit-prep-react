const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.cjs");
const bodyParser = require('body-parser')
const auth = require("../auth/auth.cjs");

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/public", authController.public);

// login endpoint
router.get("/auth", auth, authController.auth);

// router.delete("/feedback/:id", feedbackController.deleteFeedback);

// router.put("/feedback/:id", feedbackController.updateFeedback);

module.exports = router;
