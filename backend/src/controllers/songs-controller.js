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
export async function likeSong(req, res, next) {
  const songId = req.body.songId;
  const userId = req.user.uid;
  try {
    const checkUser = await User.findOne({ _id: userId });
    console.log(checkUser);
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
  console.log(songId);

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

// import db from "../models";

// import { Songs } from "../models/songs-model.js";
// import {
//   uploadSongCloud,
//   deleteImageCloud,
//   uploadImageCloud,
// } from "../libs/cloudinary.js";
// import { Blob } from "buffer";

// import jsmediatags from "jsmediatags";

// export function getTags(req, res, next) {
//   new jsmediatags.Reader(req.body.file).setTagsToRead().read({
//     onSuccess: function (tag) {
//       res.send(tag);
//       console.log(tag);
//     },
//     onError: function (error) {
//       console.log(":(", error.type, error.info);
//     },
//   });
// }

// export async function createSong(req, res, next) {
//   const { uid, email } = req.user;
//   const songUser = {
//     userId: uid,
//     email: email,
//   };
//   var songData = null;
//   async function step1Cloudinary(newImage) {
//     const resultLoadImage = await uploadSongCloud(newImage);
//     return {
//       url: resultLoadImage.secure_url,
//       public_id: resultLoadImage.public_id,
//     };
//   }
//   async function step2DataFile(songFile) {
//     return new Promise((resolve, reject) => {
//       new jsmediatags.Reader(songFile).setTagsToRead().read({
//         onSuccess: resolve,
//         onError: reject,
//       });
//     });
//   }
//   async function astep3CreateDB(songFile, songUser, songData) {
//     const song = await Songs.findOne({ title: songData.title });
//     if (song) {
//       return res.sendStatus(200);
//     }
//     const newSong = await Songs.create({
//       songFile: songFile,
//       songUser: songUser,
//       songData: songData,
//     });
//     console.log(newSong);
//   }
//   async function step25Cloudinary(songPicture) {
//     const resultLoadPicture = await uploadImageCloud(songPicture);
//     return {
//       pictureUrl: resultLoadPicture.secure_url,
//       picturePublic_id: resultLoadPicture.public_id,
//     };
//   }

//   try {
//     const newImage = req.body[0];
//     if (newImage) {
//       var songFile = await step1Cloudinary(newImage);
//       const tag = await step2DataFile(songFile.url);
//       console.log(tag.tags.picture);
//       if (tag.tags.picture) {
//         var tags = tag.tags;
//         var image = tags.picture;
//         // var base64String = "";
//         // for (var i = 0; i < image.data.length; i++) {
//         //   base64String += String.fromCharCode(image.data[i]);
//         // }
//         // var base64 = "data:image/jpeg;base64," + window.btoa(base64String);

//         // // var blob = new Blob([new Uint8Array(image.data)], {
//         // //   type: image.format,
//         // // });
//         // // console.log("blob", blob);
//         // // var url = URL.createObjectURL(blob);

//         // var imageFile = await step25Cloudinary(base64);
//         songData = {
//           title: tag?.tags?.title,
//           artist: tag?.tags?.artist,
//           album: tag?.tags?.album,
//           picture: "imageFile",
//         };
//       } else {
//         songData = {
//           title: tag?.tags?.title,
//           artist: tag?.tags?.artist,
//           album: tag?.tags?.album,
//           picture: "",
//         };
//       }
//       await astep3CreateDB(songFile, songUser, songData);
//     }
//     console.log(songData);
//     res.sendStatus(200);
//   } catch (error) {
//     next(error);
//   }
// }

// export async function getSongs(req, res, next) {
//   try {
//     const songs = await Songs.find().select().lean().exec();

//     res.status(200).send({
//       data: songs,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// export async function getSongsFilter(req, res, next) {
//   const { filter } = req.params;

//   try {
//     const songs = await Songs.find({
//       songName: new RegExp(filter, "i"),
//     })
//       .select()
//       .lean()
//       .exec();
//     console.log(songs);
//     res.status(200).send({
//       data: songs,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// export async function getMySongs(req, res, next) {
//   // const { uid } = req.user;
//   const { uid, email } = req.user;

//   try {
//     const songs = await Songs.find({
//       songUser: {
//         userId: uid,
//         email: email,
//       },
//     })
//       .select()
//       .lean()
//       .exec();

//     res.status(200).send({
//       data: songs,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

// // async function getSingleSong(req, res, next) {
// //   const { productId } = req.params;

// //   try {
// //     const product = await db.Product.findOne({ _id: productId })
// //       .select({
// //         title: 1,
// //         pages: 1,
// //       })
// //       .populate({
// //         path: "author",
// //         select: {
// //           firstName: 1,
// //           lastName: 1,
// //         },
// //       })
// //       .lean()
// //       .exec();

// //     res.status(200).send({
// //       data: product,
// //     });
// //   } catch (error) {
// //     next(error);
// //   }
// // }

// // async function updateProduct(req, res, next) {
// //   const { productId } = req.params;
// //   const { title, pages } = req.body;

// //   try {
// //     const product = await db.Product.findOneAndUpdate(
// //       { _id: productId },
// //       {
// //         $set: {
// //           title: title,
// //           pages: pages,
// //         },
// //       },
// //       { new: true }
// //     );

// //     res.status(200).send({
// //       data: product,
// //     });
// //   } catch (error) {
// //     next(error);
// //   }
// // }

// // async function deleteProduct(req, res, next) {
// //   const { productId } = req.params;
// //   console.log(productId);

// //   try {
// //     const result = await db.Product.deleteOne({
// //       _id: productId,
// //     }).lean();
// //     console.log(result);
// //     if (result.ok === 1 && result.deletedCount === 1) {
// //       res.status(200).send({
// //         data: "Product removed",
// //       });
// //     } else {
// //       res.status(500).send({
// //         data: "Product not removed",
// //       });
// //     }
// //   } catch (error) {
// //     console.log(error.message);
// //     next(error);
// //   }
// // }
