import { Playlists } from "../models/playList-models.js";
import { uploadImagePlaylistCloud } from "../libs/cloudinary.js";


export async function getPlayList(req, res) {
    try {
      const playlists = await Playlists.find()
        // .select({
        //   songUrl: 1,
        //   songName: 1,
        // })
        // .lean()
        // .exec();
  
      res.status(200).send({
        data: playlists,
      });
    } catch (error) {
      next(error);
    }
    // res.json({message: "hi playlist"})
  }
  export async function createPlaylist(req, res, next) {
    const { uid } = req.user;
    const body = req.body;
    let playlistImg = "";
    try {
      const newImage = req.body[0];
  
      if (newImage) {
        console.log("newImage");
        const resultLoadImage = await uploadImagePlaylistCloud(newImage);
        // await fs.remove(req.files.image.tempFilePath);
        playlistImg = resultLoadImage.secure_url;
      }
      // guardar en la base de datos
      // const song = await Song.findOne({ nameSong: nameSong });
      // if (song) {
      //   return res.sendStatus(200);
      // }
      const newPlaylist = await Playlists.create({
        playlistImg: playlistImg,
        name: body.name,
        author : uid,
      });
      console.log(newSong);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }