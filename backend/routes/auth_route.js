import express from "express";
import {signup, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth} from "../controllers/auth_controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";

const router = express.Router();

router.post('/signup', signup);


router.post('/login',login);
router.post('/logout', logout);
router.post('/verifyEmail', verifyEmail);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
router.get('/check-auth', verifyToken, checkAuth);




export default router;