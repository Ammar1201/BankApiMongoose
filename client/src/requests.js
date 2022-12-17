// import { Api } from "./api/Api";

// export const addUserReq = async (user) => {
//   try {
//     const res = await Api.post('/users', user);
//     return res.data;
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

// export const addNewAccountReq = async (userID) => {
//   try {
//     const res = await Api.post(`/users/${userID}/accounts/new-account`);
//     console.log(res.data);
//     return res.data;
//   }
//   catch (error) {
//     console.log(error);
//   }
// };

// export const getUserAccountsReq = async (userID) => {
//   try {
//     const res = await Api.get(`/users/${userID}/accounts`);
//     return res.data;
//   }
//   catch (error) {
//     console.log(error);
//   }
// };