import { Playlists } from "../models/playList-models.js";

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