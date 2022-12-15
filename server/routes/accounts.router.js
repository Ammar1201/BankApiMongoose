import { Router } from "express";
import { findUser } from "../middlewares/users.middleware.js";
import { getUserAccounts, addAccount, depositToAccount, updateCredit, withdrawFromAccount } from "../controllers/accounts.controller.js";

export const accountsRouter = Router({ mergeParams: true });

accountsRouter.get('', findUser, getUserAccounts);

accountsRouter.post('/new-account', findUser, addAccount);

accountsRouter.patch('/deposit', findUser, depositToAccount);
accountsRouter.patch('/updateCredit', findUser, updateCredit);
accountsRouter.patch('/withdraw', findUser, withdrawFromAccount);