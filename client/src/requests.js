import { Api } from "./api/Api";

export const addUserReq = async (user) => {
  try {
    const res = await Api.post('/users', user);
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
};