import { User } from "../models";
import { debug } from "loglevel";

async function getUsers(req, res, next) {
  try {
    const users = await User.find({})
      .select({
        firstName: 1,
        lastName: 1,
      })
      .limit(10)
      .lean()
      .exec();

    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

async function getUserDetails(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await User.findOne({
      _id: userId,
    })
      .select("-password -__v -createdAt -updatedAt")
      .lean()
      .exec();

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  const { firstName, lastName, email, password, speaks } = req.body
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      speaks,
    });

    res.status(200).send({
      data: {
        _id: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        speaks: user.speaks,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { userId } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
        },
      },
      {
        new: true,
      },
    ).select({
      firstName: 1,
      lastName: 1,
    });

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const { userId } = req.params;

  try {
    const result = await User.deleteOne({
      _id: userId,
    }).lean();

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "User removed",
      });
    } else {
      res.status(500).send({
        data: "User not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function signUp(req, res, next) {
  const { uid, email } = req.user;
  console.log(req.user);
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.sendStatus(200);
    }
    const newUser = await User.create({
      _id: uid,
      email: email,
    });
    debug(newUser);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

export const getUsers = getUsers;
export const getUserDetails = getUserDetails;
export const createUser = createUser;
export const updateUser = updateUser;
export const deleteUser = deleteUser;
export const signUp = signUp;
