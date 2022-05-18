import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DropdownAddPlaylist from '../Dropdown/AddPlaylist/AddPlaylist';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  useLikeSongMutation,
  useGetSongQuery,
  useNotLikeSongMutation,
} from "../../services/songApi";
import {
  addCurrentSong,
  addFirstCurrentSong,
  songsSelector,
  addPlayQueue,
} from "../../features/song/songsSlice";
import { useGetUserQuery } from '../../services/userApi';
import AuthContext from '../../context/AuthContext';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import "./SongCard.scss";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} sx={{mr:"100%"}}/>;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SongCard2({ songName, songUrl, songArtist, songId, id }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
  const currentSong = useSelector((state) => state.songs.currentSong);
  const dispatch = useDispatch();
  const currentUser = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);
  const { data: song } = useGetSongQuery(songId);
  const { data: user, refetch } = useGetUserQuery(currentUser?.uid);
  const [LikeSong, response] = useLikeSongMutation();
  const [NotLikeSong, response2] = useNotLikeSongMutation();

  const fav = user?.data?.myFavoriteSongs?.includes(songId);

  const handlePlay = () => {
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
    <Card variant="outlined" sx={{ maxWidth: "100%" }}>
      <Grid container spacing={12}>
      <Grid item xs={0.5}>
      <Avatar variant="square" src="https://indiehoy.com/wp-content/uploads/2022/03/eminem.jpg"  sx={{ width: 56, height: 56 }}>
      </Avatar>
      </Grid>
      <Grid item xs={4}>
          <Typography sx={{ml:"1%"}} variant="subtitle1">
            {songName}
          </Typography>
          <Typography sx={{ml:"1%"}} variant="subtitle2">
            {songArtist}
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
          <DropdownAddPlaylist id={id} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
