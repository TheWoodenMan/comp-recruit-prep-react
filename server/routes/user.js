import { Router } from "express";
const router = Router();
import { registerUser, loginUser } from "../controllers/user.js";

import { json, urlencoded } from 'body-parser';

// create application/json parser
var jsonParser = json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = urlencoded({ extended: false })

// // router.get("/feedback", feedbackController.fetchFeedback);

router.post("/register", jsonParser, registerUser);

// login endpoint
router.post("/login", jsonParser, loginUser);

// router.delete("/feedback/:id", feedbackController.deleteFeedback);

// router.put("/feedback/:id", feedbackController.updateFeedback);

export default router;
