import { User } from "../models/user.models.js";
import { Account } from "../models/account.model.js";
import { randomAccountNumber } from "../utils.js";

const addAccountToNewUser = async (userID) => {
  const accountNumber = randomAccountNumber();
  await Account.create({
    owner: userID,
    accountNumber
  });
  return accountNumber;
};

//* -------------------------------------------post functions------------------------------------------------------
export const addNewUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const accountNumber = await addAccountToNewUser(newUser.id);
    newUser.accounts.push(accountNumber);
    await newUser.save();
    res.status(201).send(newUser);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//* -------------------------------------------get functions------------------------------------------------------
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    res.status(200).send(req.user);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};