// import db from "../models";
// import { logger } from "../config/config";
import {Songs} from "../models/songs-model.js";
// import fs from "fs-extra";

// import { uploadImageCloud, deleteImageCloud } from "../libs/cloudinary";

// async function createSong(req, res, next) {
//   let image = null;

//   const { title, price, img, shortDescription, longDescription, unitsInStock } =
//     req.body.newSong;

//   //   const uid = req.body.uid;
//   const song = req.body.song;

//   console.log("song", song);
//   //   console.log(req.file.image);

//   try {
//     if (req.file.deleteSongCloud) {
//       console.log("if pasado", song);
//       const resultLoadSong = await uploadSongCloud(req.file.image.tempFilePath);
//       await fs.remove(req.file.song.tempFilePath);
//       song = {
//         url: resultLoadSong.secure_url,
//         // public_id: resultLoadImage.public_id,
//       };
//     }

//     const product = await db.Product.create({
//       // title: title,
//       // price: price,
//       song: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/S._tuberosum-5.JPG/375px-S._tuberosum-5.JPG",
//       shortDescription: shortDescription,
//       longDescription: longDescription,
//       unitsInStock: unitsInStock,
//       quantity: 0,
//       isFavorite: false,
//       author: {
//         email: email,
//         id: uid,
//       },
//       votes: {
//         upVotes: {
//           upperLimit: 10,
//           currentValue: 0,
//         },
//         downVotes: {
//           lowerLimit: 10,
//           currentValue: 0,
//         },
//       },
//     });

//     res.status(201).send({
//       data: song._id,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

export async function getSongs(req, res, next) {
  try {
    const songs = await Songs.find().select({
      songUrl: 1,
      songName: 1
    }).lean().exec();

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

