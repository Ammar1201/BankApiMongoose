import axios from 'axios';

let myUrl = 'http://localhost:5000/api';

if (process.env.NODE_ENV === 'production') {
  myUrl = 'api';
}

const Api = axios.create({
  baseURL: myUrl,
});

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

export const getUserAccountsReq = async (userID) => {
  try {
    const res = await Api.get(`/users/${userID}/accounts`);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};