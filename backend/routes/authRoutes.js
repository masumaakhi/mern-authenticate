import express from 'express';
import passport from 'passport';
import {
  isAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  verifyEmail,
} from '../controllers/authController.js';
import { userAuth } from '../middleware/userAuth.js';

const authRouter = express.Router();

// Normal Auth Routes
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/verify-account', userAuth, verifyEmail);
authRouter.get('/is-auth', userAuth, isAuthenticated);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

// Google Auth Routes
authRouter.get(
  '/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
  })
);



authRouter.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const token = req.user.token; // ✅ Define first

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
  }
);

export default authRouter;
