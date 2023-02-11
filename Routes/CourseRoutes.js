import express from "express";
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../Controllers/CourseController.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../Middleware/auth.js";
import singleUpload from "../Middleware/Multer.js";
const router = express.Router();
//get all courses without lectures
router.route("/courses").get(getAllCourses);
//create new course-only admin
router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);
//add lecture, delete course, get course details
router.route("/course/:id").get(isAuthenticated, authorizeSubscribers, getCourseLectures)
.post(isAuthenticated, authorizeAdmin, singleUpload,addLecture)
.delete(isAuthenticated, authorizeAdmin, deleteCourse);
//delete lectures
router.route("/lecture").post(isAuthenticated, authorizeAdmin, deleteLecture);
export default router;