import express from "express";
import { contact, courseRequest, getDashboardStats } from "../Controllers/OtherControllers.js";
import { authorizeAdmin, isAuthenticated } from "../Middleware/auth.js";
const router = express.Router();
//contact form
router.route("/contact").post(contact);
//request form
router.route("/courseRequest").post(courseRequest);
//get admin dashboard stats
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin, getDashboardStats);
export default router;