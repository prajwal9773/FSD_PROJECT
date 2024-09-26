import express from "express";
import {signup, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth} from "../controllers/auth_controller.js";
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js'
import { verifyToken } from "../Middleware/verifyToken.js";
import { User} from '../models/user_model.js'; 

const router = express.Router();
router.put('/edit-name', verifyToken, async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.userId; // Extract user ID from the verified token

        // Update user's name
        const user = await User.findById(userId);
        user.name = name;
        await user.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(res, userId);

        res.status(200).json({ message: 'Name updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating name' });
    }
});
router.put('/change-password', verifyToken, async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const userId = req.userId; // Extract user ID from the verified token

        // Find the user by ID
        const user = await User.findById(userId);

        // Compare old password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect old password' });
        }

        // Hash new password and update
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(res, userId);

        res.status(200).json({ message: 'Password updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating password' });
    }
});

router.post('/signup', signup);


router.post('/login',login);
router.post('/logout', logout);
router.post('/verifyEmail', verifyEmail);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
router.get('/check-auth', verifyToken, checkAuth);
router.post('/logout', verifyToken, (req, res) => {
    res.clearCookie("token"); 
    res.status(200).json({ message: 'Logged out successfully' });
});




export default router;