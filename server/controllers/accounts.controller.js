import { Account } from "../models/account.model.js";
import { randomAccountNumber, isEnoughBalance } from "../utils.js";

//* -------------------------------------------get functions------------------------------------------------------
export const getUserAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ owner: req.user.id });
    res.status(200).send(accounts);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//* -------------------------------------------post functions------------------------------------------------------
export const addAccount = async (req, res) => {
  const user = req.user;
  try {
    const accountNumber = randomAccountNumber();
    user.accounts.push(accountNumber);
    const newAccount = await Account.create({
      owner: user.id,
      accountNumber
    });
    await user.save();
    res.status(201).send(newAccount);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//* -------------------------------------------put functions------------------------------------------------------
export const depositToAccount = async (req, res) => {
  const { accountNumber, amountToDeposit } = req.body;

  if (accountNumber === undefined) {
    res.status(400).send({ message: 'You must provide the account number' });
    return;
  }

  if (amountToDeposit === undefined) {
    res.status(400).send({ message: 'You must provide the amount to deposit' });
    return;
  }

  if (amountToDeposit < 0) {
    res.status(400).send({ errorStatus: 404, message: 'Cash must be a positive number!' });
    return;
  }

  try {
    const account = await Account.findOne({ accountNumber });
    if (!account) {
      res.status(404).send({ message: 'account not found!' });
      return;
    }

    account.cash += amountToDeposit;
    await account.save();
    res.status(200).send(account);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//? ------------------------------------------------------------------------------------------------------
export const updateCredit = async (req, res) => {
  const { accountNumber, newCredit } = req.body;

  if (accountNumber === undefined) {
    res.status(400).send({ message: 'You must provide the account number' });
  }

  if (newCredit === undefined) {
    res.status(400).send({ message: 'You must provide the new credit amount' });
  }

  if (newCredit < 0) {
    res.status(404).send({ errorStatus: 404, message: 'Credit must be a positive number!' });
  }

  const account = await Account.findOne({ accountNumber });
  if (!account) {
    res.status(404).send({ message: 'account not found!' });
    return;
  }

  try {
    account.credit = newCredit;
    await account.save();
    res.status(200).send(account);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//? ------------------------------------------------------------------------------------------------------
export const withdrawFromAccount = async (req, res) => {
  const { accountNumber, amountToWithdraw } = req.body;

  if (accountNumber === undefined) {
    res.status(404).send({ errorStatus: 404, message: 'You must provide the account number' });
  }

  if (amountToWithdraw === undefined) {
    res.status(404).send({ errorStatus: 404, message: 'You must provide the amount to withdraw' });
  }

  if (amountToWithdraw < 0) {
    res.status(404).send({ errorStatus: 404, message: 'Amount to withdraw must be a positive number!' });
  }

  try {
    const account = await Account.findOne({ accountNumber });
    if (!account) {
      res.status(404).send({ message: 'account not found!' });
      return;
    }

    if (isEnoughBalance(account, amountToWithdraw)) {
      account.cash -= amountToWithdraw;
      await account.save();
      res.status(200).send(account);
    }
    else {
      res.status(404).send({ message: 'user does not have enough balance!' });
    }
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};