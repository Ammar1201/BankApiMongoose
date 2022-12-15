import { Router } from "express";

export const accountsRouter = Router({ mergeParams: true });

accountsRouter.get('');

accountsRouter.post('/new-account');

accountsRouter.put('/deposit');
accountsRouter.put('/updateCredit');
accountsRouter.put('/withdraw');