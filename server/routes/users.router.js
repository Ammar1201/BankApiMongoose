import { Router } from "express";

export const userRouter = Router();

userRouter.post('', addNewUser);

userRouter.get('', getAllUsers);
userRouter.get('/:userID', getUser);