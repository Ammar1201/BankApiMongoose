import { Router } from "express";

export const transfersRouter = Router();

transfersRouter.post('/newTransfer');

transfersRouter.get('');
transfersRouter.get('/:transferID');