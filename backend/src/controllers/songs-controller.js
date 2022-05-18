// import db from "../models";
import { Songs } from "../models/songs-model.js";
import { User } from "../models/user-model.js";
import {
  uploadSongCloud,
  deleteImageCloud,
  uploadImageCloud,
} from "../libs/cloudinary.js";

import jsmediatags from "jsmediatags";

export function getTags(req, res, next) {
  new jsmediatags.Reader(req.body.file).setTagsToRead().read({
    onSuccess: function (tag) {
      res.send(tag);
    },
    onError: function (error) {},
  });
}

async function step1Cloudinary(newImage) {
  const resultLoadImage = await uploadSongCloud(newImage);
  return {
    url: resultLoadImage.secure_url,
    public_id: resultLoadImage.public_id,
  };
}
async function step33Cloudinary(newImage) {
  const resultLoadImage = await uploadImageCloud(newImage[0]);
  return {
    imageUrl: resultLoadImage.secure_url,
    imagePublic_id: resultLoadImage.public_id,
  };
}

async function step2DataFile(songFile) {
  return new Promise((resolve, reject) => {
    new jsmediatags.Reader(songFile).setTagsToRead().read({
      onSuccess: resolve,
      onError: reject,
    });
  });
}

async function astep3CreateDB(songFile, songUser, songData, songImage) {
  const newSong = await Songs.create({
    songFile: songFile,
    songUser: songUser,
    songData: songData,
    songImage: songImage,
  });
  console.log(newSong);
}

export async function createSong(req, res, next) {
  const { uid, email } = req.user;
  const songUser = {
    userId: uid,
    email: email,
  };

  try {
    const newImage = req.body[0];
    if (newImage) {
      var songFile = await step1Cloudinary(newImage);
    }
    // get data file
    const tag = await step2DataFile(songFile.url);

    const songDataTaker = async (tag) => {
      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64string = "";
      for (let i = 0; i < data.length; i++)
        base64string += String.fromCharCode(data[i]);
      let image33 = [`data:${format};base64,${btoa(base64string)}`];
      const image = await step33Cloudinary(image33);

      return image;
    };
    const songData = {
      title: tag?.tags?.title,
      artist: tag?.tags?.artist,
      album: tag?.tags?.album,
    };
    const songImageTaker = await songDataTaker(tag);

    const total = await astep3CreateDB(
      songFile,
      songUser,
      songData,
      songImageTaker
    );

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
export async function getSongs(req, res, next) {
  try {
    const songs = await Songs.find().select().lean().exec();

    res.status(200).send({
      data: songs,
    });
  } catch (error) {
    next(error);
  }
}

export async function getSongsFilter(req, res, next) {
  const { filter } = req.params;

  try {
    if (filter === null) {
      songs = await Songs.find({}).select().lean().exec();
      res.status(200).send({
        data: songs,
      });
    } else {
      const songs = await Songs.find({
        "songData.title": new RegExp(filter, "i"),
      })
        .select()
        .lean()
        .exec();

      res.status(200).send({
        data: songs,
      });
    }
  } catch (error) {
    next(error);
  }
}
export async function getMySongs(req, res, next) {
  // const { uid } = req.user;
  const { uid, email } = req.user;

  try {
    const songs = await Songs.find({
      songUser: {
        userId: uid,
        email: email,
      },
    })
      .select()
      .lean()
      .exec();

    res.status(200).send({
      data: songs,
    });
  } catch (error) {
    next(error);
  }
}
export async function getMyLikedSongs(req, res, next) {
  const { uid } = req.user;

  try {
    const songs = await User.findOne({
      _id: uid,
    })
      .select({ myFavoriteSongs: 1, _id: 0 })
      .populate("myFavoriteSongs", {})
      .lean()
      .exec();

    res.status(200).send({
      data: songs,
    });
    console.log(songs);
  } catch (error) {
    next(error);
  }
}

export async function likeSong(req, res, next) {
  const songId = req.body.songId;
  const userId = req.user.uid;
  try {
    const checkUser = await User.findOne({ _id: userId });
    if (!checkUser.myFavoriteSongs.includes(songId)) {
      const song = await Songs.findOneAndUpdate(
        { _id: songId },
        {
          $inc: {
            likes: 1,
          },
        }
      );
      await User.findOneAndUpdate(
        { _id: userId },
        {
          $push: { myFavoriteSongs: [{ _id: songId }] },
        }
      );
    }

    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}
export async function cancelLikeSong(req, res, next) {
  const songId = req.body.songId;
  const userId = req.user.uid;
  try {
    const checkUser = await User.findOne({ _id: userId });
    if (checkUser.myFavoriteSongs.includes(songId)) {
      await Songs.findOneAndUpdate(
        { _id: songId },
        {
          $inc: {
            likes: -1,
          },
        },
        { new: true }
      );

      await User.findOneAndUpdate(
        { _id: userId },
        {
          $pull: { myFavoriteSongs: songId },
        },
        { new: true }
      );
    }
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}
export async function getSong(req, res, next) {
  const { songId } = req.params;

  try {
    const song = await Songs.findOne({ _id: songId })
      .select({})
      // .populate({
      //   path: "author",
      //   select: {
      //     firstName: 1,
      //     lastName: 1,
      //   },
      // })
      .lean()
      .exec();

    res.status(200).send({
      data: song,
    });
  } catch (error) {
    next(error);
  }
}
