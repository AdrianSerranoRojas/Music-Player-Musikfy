import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import AddIcon from "@mui/icons-material/Add";
import { height } from "@mui/system";
import {
  addCurrentSong,
  addFirstCurrentSong,
  songsSelector,
  addPlayQueue,
} from "../../features/song/songsSlice";
import { useDispatch, useSelector } from "react-redux";
import DropdownAddPlaylist from "../Dropdown/AddPlaylist/DropdownAddPlaylist";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavIcon from "../FavIcon/FavIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useLikeSongMutation,
  useGetSongQuery,
  useNotLikeSongMutation,
} from "../../services/songApi";
import { useGetUserQuery } from "../../services/userApi";
import {
  useGetSongsCounterQuery,
  useGetSongsCounterByUserQuery,
  useCreateActionMutation,
  useGetSongCounterByUserQuery,
} from "../../services/stadisticsApi";
import { TrendingUpSharp } from "@mui/icons-material";
import AuthContext from "../../context/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import "./SongCard.scss";

function SongCard({ song }) {
  const songName = song?.songData?.title;
  const songArtist = song?.songData?.artist;
  const songUrl = song?.songFile?.url;
  const songId = song?._id;
  const songImage = song?.songImage?.imageUrl;

  const theme = useTheme();
  const currentSong = useSelector((state) => state.songs.currentSong);
  const dispatch = useDispatch();
  const currentUser = useContext(AuthContext);

  const [createAction, ActionResponse] = useCreateActionMutation();

  const [open, setOpen] = React.useState(false);
  // const { data: song } = useGetSongQuery(songId);
  const { data: user, refetch } = useGetUserQuery(currentUser?.uid);
  const [LikeSong, response] = useLikeSongMutation();
  const [NotLikeSong, response2] = useNotLikeSongMutation();
  const userId = user.id;

  const { data: songCounter, isSuccess } = useGetSongCounterByUserQuery({
    songId,
    userId,
  });

  useEffect(() => {
    console.log(songCounter);
  }, [songCounter]);

  const fav = user?.data?.myFavoriteSongs?.includes(songId);

  const handlePlay = () => {
    if (currentUser) {
      console.log(songId);
      var userId = currentUser.uid;
      console.log(userId);
      createAction({ songId: songId, userId: userId, action: "play" });
    }
    if (currentSong[0].audio === "") {
      dispatch(
        addFirstCurrentSong([
          {
            isPlaying: true,
            audio: songUrl,
            songName: songName,
            songArtist: songArtist,
          },
        ])
      );
    } else {
      dispatch(
        addPlayQueue({
          isPlaying: true,
          audio: songUrl,
          songName: songName,
          songArtist: songArtist,
        })
      );
    }
  };
  const handleQueue = () => {
    dispatch(
      addCurrentSong({
        isPlaying: true,
        audio: songUrl,
        songName: songName,
        songArtist: songArtist,
      })
    );
  };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLike = () => {
    console.log(fav);
    if (fav) {
      NotLikeSong({ songId, fav });
      refetch();
      console.log("esta cancion ya te gusta loco!");
    } else {
      LikeSong({ songId, fav });
      refetch();
    }
    refetch();
  };

  return (
    <>
      <Card variant="outlined" sx={{ display: "flex", height: 65 }}>
        <CardMedia
          component="img"
          sx={{ width: 65, height: 65 }}
          image={songImage}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {songName}
            </Typography>
            <Typography component="div" variant="h6">
              {songName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {songArtist}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              3:14
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause" onClick={handlePlay}>
            <PlayArrowIcon sx={{ height: 20, width: 20 }} />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={handleQueue}>
            <QueueMusicIcon sx={{ height: 20, width: 20 }} />
          </IconButton>
          {/* <FavIcon onClick={handleLike} /> */}
          <IconButton onClick={handleLike} aria-label="save as favorite">
            {fav === true ? (
              <FavoriteIcon sx={{ height: 20, width: 20 }} />
            ) : (
              <FavoriteBorderIcon sx={{ height: 20, width: 20 }} />
            )}
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ height: 20, width: 20 }} />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <AddIcon sx={{ height: 20, width: 20 }} />
          </IconButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton>
                <DropdownAddPlaylist id={songId} />
                <ListItemButton onClick={handleClose}>
                  <CloseIcon />
                </ListItemButton>
              </ListItemButton>
            </List>
          </Collapse>
        </Box>
      </Card>
    </>
  );
}

export default SongCard;
