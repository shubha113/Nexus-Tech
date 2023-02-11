import express from "express";
import {
  addToPlaylist,
  changepassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateprofilepicture,
  updateUserRole
  
} from "../Controllers/UserController.js";
import { authorizeAdmin, isAuthenticated } from "../Middleware/auth.js";
import singleUpload from "../Middleware/Multer.js";



const router = express.Router();

// To register a new user
router.route("/register").post(singleUpload, register);

// Login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);
//change password
router.route("/changepassword").put(isAuthenticated, changepassword);
//updateprofile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//updateprofilepicture
router.route("/updateprofilepicture").put(isAuthenticated, singleUpload, updateprofilepicture);
//forgetpassword
router.route("/forgetpassword").post(forgetPassword);
//resetpassword
router.route("/resetpassword/:token").put(resetPassword);
//addtoplaylist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);
//Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router.route("/admin/user/:id").put(isAuthenticated, authorizeAdmin, updateUserRole).delete(isAuthenticated, authorizeAdmin, deleteUser);
export default router;






