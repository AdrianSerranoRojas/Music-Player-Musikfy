import { User } from "../models/user-model.js";
import pkg from "loglevel";
import fs from "fs-extra";
import { uploadImageCloud, deleteImageCloud } from "../libs/cloudinary.js";

const { debug } = pkg;

export async function getUsers(req, res, next) {
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
export async function getUserDetails(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await User.findOne({
      _id: userId,
    })
      .select()
      .lean()
      .exec();

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
export async function createUser(req, res, next) {
  const { firstName, lastName, email, password, speaks } = req.body;
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
export async function updateUser(req, res, next) {
  const { userId } = req.params;
  const { userName, country, birthday, gender } = req.body.editUser;

  console.log(req.body);
  let imageURL = null;
  try {
    const { image } = req.body;
    const newImage = image[0];

    if (newImage) {
      const resultLoadImage = await uploadImageCloud(newImage);
      // await fs.remove(req.files.image.tempFilePath);
      imageURL = {
        url: resultLoadImage.secure_url,
        public_id: resultLoadImage.public_id,
      };
    }
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          userName: userName,
          country: country,
          birthday: birthday,
          gender: gender,
          image: imageURL,
        },
      },
      {
        new: true,
      }
    ).select();

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}
export async function deleteUser(req, res, next) {
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
export async function signUp(req, res, next) {
  const { uid, email } = req.user;
  console.log(req.body);
  const { userName, birthday, gender, country } = req.body.userData;

  try {
    // funcion de clodinary uploadImageCloud
    let image = null;

    if (req.files?.image) {
      const resultLoadImage = await uploadImageCloud(
        req.files.image.tempFilePath
      );
      console.log(
        "console.log(req.files.image.tempFilePath);",
        req.files.image.tempFilePath
      );

      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: resultLoadImage.secure_url,
        public_id: resultLoadImage.public_id,
      };
    }
    //guardar en la base de datos

    const user = await User.findOne({ email: email });
    if (user) {
      return res.sendStatus(200);
    }
    const newUser = await User.create({
      _id: uid,
      email: email,
      userName: userName,
      gender: gender,
      birthday: birthday,
      country: country,
      image: image,
    });
    debug(newUser);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}
