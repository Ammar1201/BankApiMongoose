import { Transfer } from "../models/transfers.model.js";
import { Account } from "../models/account.model.js";
import { checkReqBody, isEnoughBalance } from "../utils.js";

//* -------------------------------------------validation functions------------------------------------------------------
const validateAmountToTransfer = (amountToTransfer, res) => {
	if (amountToTransfer === undefined) {
		res.status(400).send({ message: 'you have to provide the amountToTransfer!' });
		return true;
	}

	if (amountToTransfer <= 0) {
		res.status(400).send({ message: 'amountToTransfer must be a positive number! greater than zero' });
		return true;
	}

	if (amountToTransfer < 100) {
		res.status(400).send({ message: 'minimum amount to transfer should be 100!' });
		return true;
	}

	return false;
};

const validateAccounts = (senderUserAccount, receiverUserAccount, res) => {
	if (!senderUserAccount) {
		res.status(400).send({ message: 'senderUserAccount not Found!' });
		return true;
	}

	if (!receiverUserAccount) {
		res.status(400).send({ message: 'receiverUserAccount not Found!' });
		return true;
	}

	return false;
};

//* -------------------------------------------get functions------------------------------------------------------
export const getSingleTransfer = async (req, res) => {
	const { transferID } = req.params;
	try {
		const transfer = await Transfer.find({ id: transferID });
		if (!transfer) {
			res.status(404).send({ message: 'transfer not found!' });
			return;
		}
		res.status(200).send(transfer);
	}
	catch (err) {
		res.status(500).send({ message: err.message });
	}
};

export const getAllTransfers = async (req, res) => {
	try {
		const transfers = await Transfer.find({});
		res.status(200).send(transfers);
	}
	catch (err) {
		res.status(500).send({ message: err.message });
	}
};

//* -------------------------------------------transfer money function------------------------------------------------------
export const transferMoney = async (req, res) => {
	const reqBody = checkReqBody(req.body);
	if (reqBody.status === 'bad request') {
		res.status(400).send(reqBody.error);
		return;
	}

	const { senderUserID, senderUserAccountNumber, receiverUserID, receiverUserAccountNumber, amountToTransfer } = req.body;

	if (validateAmountToTransfer(amountToTransfer, res)) {
		return;
	}

	if (senderUserID === undefined) {
		res.status(400).send({ message: 'you have to provide senderUserID!' });
		return;
	}

	if (receiverUserID === undefined) {
		res.status(400).send({ message: 'you have to provide receiverUserID!' });
		return;
	}

	const senderUserAccount = await Account.findOne({ owner: senderUserID, accountNumber: senderUserAccountNumber });
	const receiverUserAccount = await Account.findOne({ owner: receiverUserID, accountNumber: receiverUserAccountNumber });

	if (!senderUserAccount) {
		res.status(400).send({ message: 'senderUserAccount not Found!' });
		return;
	}

	if (!receiverUserAccount) {
		res.status(400).send({ message: 'receiverUserAccount not Found!' });
		return;
	}

	try {
		if (isEnoughBalance(senderUserAccount, amountToTransfer)) {
			senderUserAccount.cash -= amountToTransfer;
			receiverUserAccount.cash += amountToTransfer;
			await senderUserAccount.save();
			await receiverUserAccount.save();

			const transfer = await Transfer.create({
				senderUserID,
				senderUserAccountNumber,
				receiverUserID,
				receiverUserAccountNumber,
				transferredAmount: amountToTransfer
			});
			res.status(201).send(transfer);
		}
		else {
			res.status(404).send({ message: 'sending user account does not have enough balance!' });
		}
	}
	catch (err) {
		res.status(500).send({ message: err.message });
	}
};