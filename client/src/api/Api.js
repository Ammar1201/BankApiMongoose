import axios from 'axios';

let myUrl = 'http://localhost:5000/api';

if (process.env.NODE_ENV === 'production') {
  myUrl = 'api';
}

const Api = axios.create({
  baseURL: myUrl,
});

//* ------------------------------GET Requests-------------------------------------------
export const getAllUsersReq = async () => {
  try {
    const res = await Api.get('/users');
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const getSingleUserReq = async (userID) => {
  try {
    const res = await Api.get(`/users/${userID}`);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const getUserAccountsReq = async (userID) => {
  try {
    const res = await Api.get(`/users/${userID}/accounts`);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const getAllTransfersReq = async () => {
  try {
    const res = await Api.get(`/transfers`);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const getSingleTransferReq = async (transferID) => {
  try {
    const res = await Api.get(`/transfers/${transferID}`);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

//* ------------------------------POST Requests-------------------------------------------
export const addUserReq = async (user) => {
  try {
    const res = await Api.post('/users', user);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const addNewAccountReq = async (userID) => {
  try {
    const res = await Api.post(`/users/${userID}/accounts/new-account`);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const transferMoneyReq = async (transferBody) => {
  try {
    const res = await Api.post(`/transfers/newTransfer`, transferBody);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

//* ------------------------------PATCH Requests-------------------------------------------
export const depositMoneyReq = async (userID, depositBody) => {
  try {
    const res = await Api.patch(`/users/${userID}/accounts/deposit`, depositBody);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const withdrawMoneyReq = async (userID, withdrawBody) => {
  try {
    const res = await Api.patch(`/users/${userID}/accounts/withdraw`, withdrawBody);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};

export const updateCreditReq = async (userID, updateCreditBody) => {
  try {
    const res = await Api.patch(`/users/${userID}/accounts/updateCredit`, updateCreditBody);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};