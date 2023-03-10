import { User } from "../models/user.models.js";
import { checkReqBody } from "../utils.js";

export const findUser = async (req, res, next) => {
  const id = req.body.userID || req.params.userID;
  if (!id) {
    const reqBody = checkReqBody(req.body);
    if (req.method !== 'GET' && reqBody.status === 'bad request') {
      res.status(400).send(reqBody.error);
      return;
    }
  }

  let user;
  try {
    user = await User.findById(id);
    if (!user) {
      res.status(404).send({ message: 'userID not found!' });
      return;
    }
  }
  catch (err) {
    res.status(500).send({ message: err.message });
    return;
  }

  req.user = user;
  next();
};