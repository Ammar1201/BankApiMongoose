export const randomAccountNumber = () => {
  return Math.floor(Math.random() * 999999 + 100000);
};

export const checkReqBody = (reqBody) => {
  if (reqBody === undefined || (Object.values(reqBody).length === 0 && Object.keys(reqBody).length === 0)) {
    return { status: 'bad request', error: { errorStatus: 400, message: 'Bad Request No Request Body Provided!' } };
  }

  return { status: 'OK' };
};

export const isEnoughBalance = (account, amount) => {
  if (account.cash + account.credit - amount < 0) {
    return false;
  }
  return true;
};