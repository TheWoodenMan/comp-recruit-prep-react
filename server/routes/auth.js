import { Router } from "express";
const router = Router();
import { _public, auth as _auth } from "../controllers/auth.js";
import { json, urlencoded } from 'body-parser';
import auth from "../auth/auth.js";

// create application/json parser
var jsonParser = json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = urlencoded({ extended: false })

router.get("/public", _public);

// login endpoint
router.get("/auth", auth, _auth);

// router.delete("/feedback/:id", feedbackController.deleteFeedback);

// router.put("/feedback/:id", feedbackController.updateFeedback);

export default router;
