// import db from "../models";
import { Songs } from "../models/songs-model.js";
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
      console.log(tag);
    },
    onError: function (error) {
      console.log(":(", error.type, error.info);
    },
  });
}

async function step1Cloudinary(newImage) {
  const resultLoadImage = await uploadSongCloud(newImage);
  return {
    url: resultLoadImage.secure_url,
    public_id: resultLoadImage.public_id,
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

async function astep3CreateDB(songFile, songUser, songData) {
  const newSong = await Songs.create({
    songFile: songFile,
    songUser: songUser,
    songData: songData,
  });
  console.log(newSong);
}

export async function createSong(req, res, next) {
  const { uid, email } = req.user;
  console.log(req.body);
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
    const songData = {
      title: tag?.tags?.title,
      artist: tag?.tags?.artist,
      album: tag?.tags?.album,
    };

    astep3CreateDB(songFile, songUser, songData);
    // console.log("reader", songData)
    // guardar en la base de datos
    // const song = await Song.findOne({ nameSong: nameSong });
    // if (song) {
    //   return res.sendStatus(200);
    // }
    console.log(songData);
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
    const songs = await Songs.find({
      songName: new RegExp(filter, "i"),
    })
      .select()
      .lean()
      .exec();
    console.log(songs);
    res.status(200).send({
      data: songs,
    });
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

// async function getSingleSong(req, res, next) {
//   const { productId } = req.params;

//   try {
//     const product = await db.Product.findOne({ _id: productId })
//       .select({
//         title: 1,
//         pages: 1,
//       })
//       .populate({
//         path: "author",
//         select: {
//           firstName: 1,
//           lastName: 1,
//         },
//       })
//       .lean()
//       .exec();

//     res.status(200).send({
//       data: product,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// async function updateProduct(req, res, next) {
//   const { productId } = req.params;
//   const { title, pages } = req.body;

//   try {
//     const product = await db.Product.findOneAndUpdate(
//       { _id: productId },
//       {
//         $set: {
//           title: title,
//           pages: pages,
//         },
//       },
//       { new: true }
//     );

//     res.status(200).send({
//       data: product,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// async function deleteProduct(req, res, next) {
//   const { productId } = req.params;
//   console.log(productId);

//   try {
//     const result = await db.Product.deleteOne({
//       _id: productId,
//     }).lean();
//     console.log(result);
//     if (result.ok === 1 && result.deletedCount === 1) {
//       res.status(200).send({
//         data: "Product removed",
//       });
//     } else {
//       res.status(500).send({
//         data: "Product not removed",
//       });
//     }
//   } catch (error) {
//     console.log(error.message);
//     next(error);
//   }
// }
