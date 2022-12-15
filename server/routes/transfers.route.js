import { Router } from "express";

export const transfersRouter = Router();

transfersRouter.post('/newTransfer', transferMoney);

transfersRouter.get('', getAllTransfers);
transfersRouter.get('/:transferID', getSingleTransfer);