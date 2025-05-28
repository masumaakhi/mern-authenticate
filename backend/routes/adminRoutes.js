import express from 'express';
import { verifyAdmin } from '../middleware/userAuth.js';
import { getAllUsers, blockUser, editUser, deleteUser, getUserById } from '../controllers/adminController.js';


const adminRouter = express.Router();

adminRouter.get('/users', verifyAdmin, getAllUsers);
adminRouter.get('/users/:id', getUserById);
adminRouter.put('/users/:id/block', verifyAdmin, blockUser);
adminRouter.put('/update/users/:id', verifyAdmin, editUser);
adminRouter.delete('/delete/users/:id', verifyAdmin, deleteUser);

export default adminRouter;
