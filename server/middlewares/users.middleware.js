import { User } from "../models/user.models.js";

export const findUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.body.userID);
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