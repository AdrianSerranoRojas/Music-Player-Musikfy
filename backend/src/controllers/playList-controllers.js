import { Playlists } from "../models/playList-models.js";
import { Songs } from "../models/songs-model.js";
// import { uploadImagePlaylistCloud } from "../libs/cloudinary.js";

export async function getPlayLists(req, res) {
  try {
    const playlists = await Playlists.find().lean().exec();
    console.log(">>>>>>>>>get playerlistss playlists ",playlists);
    res.status(200).send({
      data: playlists,
    });
  } catch (error) {
    next(error);
  }
}

export async function getPlayList(req, res, next) {
  const { id } = req.params;
  try {
    const PlaylistsToSearch = await Playlists.find({ _id: id })
      .populate("songs", { songData: 1 , songFile: 1})
      .lean()
      .exec();
      res.status(200).send({
        data: PlaylistsToSearch,
      });
  } catch (err) {
    next(err);
  }
}

export async function createPlaylist(req, res, next) {
  const { title } = req.body;
  try {
    const newPlaylist = await Playlists.create({
      title: title,
    });
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}


export async function updatePlaylistById(req, res, next) {
  const playlistId = req.body.idPlaylist;
  const { id: songId } = req.params;
  const { uid } = req.user;

  try {
    const checkPlaylist = await Playlists.findById(playlistId);
    if (!checkPlaylist.songs.includes(songId)) {
      await Playlists.findOneAndUpdate(
        { _id: playlistId },
        {
          $push: { songs: [{ _id: songId }] },
        },
        { new: true }
      );
    }
    console.log(">>>>>>>>>get playerlist checkPlaylist",checkPlaylist);
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}
export async function removePlaylistById(req, res, next) {
  const { id } = req.params;

  try {
    const playlistsRemove = await Playlists.findByIdAndDelete(id, { new: true })
      .lean()
      .exec();

    res.status(200).send({
      message: "OK",
    });
  } catch (err) {
    console.log(err);
  }
}
