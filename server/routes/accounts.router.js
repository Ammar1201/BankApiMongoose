import { Router } from "express";

export const accountsRouter = Router({ mergeParams: true });

accountsRouter.get('', getUserAccounts);

accountsRouter.post('/new-account', addAccount);

accountsRouter.put('/deposit', depositToAccount);
accountsRouter.put('/updateCredit', updateCredit);
accountsRouter.put('/withdraw', withdrawFromAccount);