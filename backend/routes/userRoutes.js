import express from 'express';
import { userAuth, isAdmin } from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

const userRouter = express.Router();

// ✅ Run userAuth first to verify token and attach user, then check admin role
userRouter.get('/isAdminData', userAuth, isAdmin, getUserData);

// ✅ Regular user access (just checks if authenticated)
userRouter.get('/data', userAuth, getUserData);


export default userRouter;
