import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { Button, CardActionArea, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FavIconPlaylist from "../FavIcon/FavIconPlaylist";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTheme } from "@mui/material/styles";
import {
  useGetPlaylistQuery,
  useDeletePlaylistMutation,
} from "../../services/playlistApi";

import { useDispatch, useSelector } from "react-redux";

import {
  addFirstCurrentSong,
  addPlayQueue,
} from "../../features/song/songsSlice";

const PlaylistCard = ({ playlist, refetch, listSelectFunc }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [deletePlaylist, resultDelete] = useDeletePlaylistMutation();
  const { data, refetch: refetchPlyalist } = useGetPlaylistQuery(playlist._id);

  function handleSelectPlaylist(playlist) {
    listSelectFunc(playlist);
    refetchPlyalist();
  }

  async function handleDeletePlaylist() {
    await deletePlaylist(playlist._id);
    refetch();
  }

  function handlePlayPlaylist() {
    const songData = data.data[0].songs;
    songData.map((song, index) => {
      if (index === 0) {
        dispatch(
          addFirstCurrentSong([
            {
              isPlaying: true,
              audio: song.songFile.url,
              songName: song.songData.title,
              songArtist: song.songData.artist,
            },
          ])
        );
      } else if (index !== 0) {
        dispatch(
          addPlayQueue({
            isPlaying: true,
            audio: song.songFile.url,
            songName: song.songData.title,
            songArtist: song.songData.artist,
          })
        );
      }
    });
  }

  return (
    <Card
      sx={{
        maxWidth: "100%",
        border: 0,
        my: 0.5,
        display: "flex",
        justifyContent: "space-between",
        alignText: "center",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "column",
        },
      }}
      className="playlistBg"
    >
      <CardActions sx={{ py: 0, my: 0, px: 0, mx: 0, alignText: "center" }}>
        <button
          className="imgButtonPlaylist"
          onClick={() => handleSelectPlaylist(playlist)}
        >
          <Typography
            sx={{ py: 0, my: 0, fontSize: 20 }}
            className="hoverPlaylist"
          >
            {playlist.title}
          </Typography>
        </button>
      </CardActions>
      <Grid>
        <CardActions disableSpacing sx={{ py: 0, my: 0, px: 0, mx: 0 }}>
          <IconButton
            aria-label="share"
            onClick={() => handlePlayPlaylist({ playlist })}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDeletePlaylist}>
            <DeleteIcon />
          </IconButton>
          <FavIconPlaylist />
        </CardActions>
      </Grid>
    </Card>
  );
};

export default PlaylistCard;
