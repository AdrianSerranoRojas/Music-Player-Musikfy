import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import DropdownAddPlaylist from "../Dropdown/AddPlaylist/DropdownAddPlaylist";

import {
  useLikeSongMutation,
  useNotLikeSongMutation,
} from "../../services/songApi";

import {
  addCurrentSong,
  addFirstCurrentSong,
  addPlayQueue,
  songsSelector,
} from "../../features/song/songsSlice";

import { useGetUserQuery } from "../../services/userApi";

import AuthContext from "../../context/AuthContext";
import {
  useCreateActionMutation,
  useGetSongsCounterQuery,
} from "../../services/stadisticsApi";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} sx={{ mr: "100%" }} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SongCard({ song, id }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const songName = song?.songData?.title;
  const songArtist = song?.songData?.artist;
  const songUrl = song?.songFile?.url;
  const songId = song?._id;
  const songImage = song?.songImage?.imageUrl;

  const theme = useTheme();
  const { currentSong } = useSelector(songsSelector);
  const dispatch = useDispatch();
  const currentUser = useContext(AuthContext);

  const [createAction, ActionResponse] = useCreateActionMutation();

  const [open, setOpen] = React.useState(false);
  const {
    data: user,
    isSuccess: userIsSuccess,
    refetch,
  } = useGetUserQuery(currentUser?.uid);
  const [LikeSong, response] = useLikeSongMutation();
  const [NotLikeSong, response2] = useNotLikeSongMutation();

  const { data: songsCounter, isSuccess } = useGetSongsCounterQuery();

  const [songCounter, setSongCounter] = useState({ total: 0 });

  useEffect(() => {
    if (songsCounter) {
      let songCounterX = songsCounter.find((song) => song.songId === songId);
      setSongCounter(songCounterX);
    }
  }, [songsCounter]);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(user?.data?.myFavoriteSongs?.includes(songId));
  }, [user]);

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

  const handleLike = async () => {
    if (fav) {
      await NotLikeSong({ songId, fav });
      refetch();
    } else {
      await LikeSong({ songId, fav });
      refetch();
    }
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        border: 0,
        my: 0.5,
        display: "flex",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Grid container spacing={12}>
        <Grid item xs={0.5}>
          <Avatar
            variant="square"
            src={songImage}
            sx={{ width: 56, height: 56 }}
          ></Avatar>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ ml: "1%" }} variant="subtitle1">
            {songName}
          </Typography>
          <Typography sx={{ ml: "1%" }} variant="subtitle2">
            {songArtist}
            {isSuccess && songCounter?.total}
          </Typography>
        </Grid>
      </Grid>
      <CardActions disableSpacing>
        <IconButton aria-label="play/pause" onClick={handlePlay}>
          <PlayArrowIcon />
        </IconButton>
        <IconButton aria-label="play/pause" onClick={handleQueue}>
          <QueueMusicIcon />
        </IconButton>
        <IconButton onClick={handleLike} aria-label="save as favorite">
          {fav === true ? (
            <FavoriteIcon sx={{ height: 20, width: 20 }} />
          ) : (
            <FavoriteBorderIcon sx={{ height: 20, width: 20 }} />
          )}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <AddIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <DropdownAddPlaylist id={songId} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
