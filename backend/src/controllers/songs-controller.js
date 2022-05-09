// import db from "../models";
// import { logger } from "../config/config";
import { Songs } from "../models/songs-model.js";
import { uploadSongCloud, deleteImageCloud } from "../libs/cloudinary.js";

import jsmediatags from "jsmediatags";

export function getTags(req, res, next) {
  new jsmediatags.Reader(
    "https://res.cloudinary.com/carapolla/video/upload/v1651744987/songs/los-chikos-del-maiz-los-hijos-de-ivan-drago-con-pablo-hasel_1_obauwx.mp3"
  )
    .setTagsToRead()
    .read({
      onSuccess: function (tag) {
        res.send(tag);
        console.log(tag);
      },
      onError: function (error) {
        console.log(":(", error.type, error.info);
      },
    });
}
export async function createSong(req, res, next) {
  const body = req.body;
  console.log(body);

  let imageURL = null;
  try {
    const { image } = req.body;
    const newImage = image[0];

    if (newImage) {
      const resultLoadImage = await uploadSongCloud(newImage);
      // await fs.remove(req.files.image.tempFilePath);
      imageURL = {
        url: resultLoadImage.secure_url,
        public_id: resultLoadImage.public_id,
      };
    }
    // guardar en la base de datos
    // const song = await Song.findOne({ nameSong: nameSong });
    // if (song) {
    //   return res.sendStatus(200);
    // }
    // const newUser = await Song.create({
    //   image: image,
    // });
    // debug(newUser);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

export async function getSongs(req, res, next) {
  try {
    const songs = await Songs.find()
      .select({
        songUrl: 1,
        songName: 1,
      })
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
