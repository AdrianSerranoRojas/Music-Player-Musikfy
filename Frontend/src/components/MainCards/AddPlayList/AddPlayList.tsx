import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  useGetPlaylistsQuery,
  useDeletePlaylistMutation,
  useUpdatePlaylistMutation,
  useCreatePlaylistMutation,
} from "../../../services/playlistApi";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./AddPlayList.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import FavIconPlaylist from "../../FavIcon/FavIconPlaylist";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from "@mui/material/Modal";
import { Button, CardActionArea, Grid, TextField } from "@mui/material";
import React from "react";
import styled from '@mui/material/styles/styled';

const Widget = styled("div")(({ theme }) => ({
  overflowY: "hidden",
  maxWidth: "100%",
  height: "40vh",
  zIndex: 1,
  overflow: "scroll",
}));

function AddPlayList({ listSelectFunc, refetching }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [createPlaylist, result] = useCreatePlaylistMutation();
  const [deletePlaylist, resultDelete] = useDeletePlaylistMutation();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation();

  const [playlistName, setPlaylistName] = useState("List");

  function handleSelectPlaylist(playlist) {
    listSelectFunc(playlist);
    refetching();
  }

  async function handleCreatePlaylist() {
    await createPlaylist({ title: playlistName });
    refetch();
  }
  async function handleDeletePlaylist(playlistName) {
    await deletePlaylist(playlistName.playlist._id);
    refetch();
  }
  async function handleUpdatePlaylist(playlistName) {
    await updatePlaylist(playlistName.playlist._id);
  }

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <Widget>
    <Typography variant="h4" align="center" fontFamily="Vollkorn, serif" >
        All the Playlists!
    </Typography>
    <Box>
    <Card>
    <CardHeader
      title="Create Playlist"
      sx={{pt:2, pb:0, my:0}}
    />
    <IconButton aria-label="add" onClick={handleOpen} sx={{ml: 9}}>
      <AddCircleIcon sx={{ height: 55, width: 55 }}/>
    </IconButton>
    <Modal
        open={open}
        onClose={handleClose}
      >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="boxModal">
          <Typography variant="h5" align="center" fontFamily="Vollkorn, serif"  >
            Create playlist
          </Typography>
          <hr />
          <TextField label="Title" variant="filled" onChange={(e) => handleChange(e)}/><br></br>
          <Button onClick={handleCreatePlaylist} variant="contained">Create</Button>
          </Box>
      </Modal>
    </Card>
    {isSuccess &&
          data.data.map((playlist, index) => {
            return (
              <div  key={index} >
    <Card  key={index}  sx={{mt:0.2}}>
      <Box >
      <CardActionArea>
      <Button
      className='imgButtonPlaylist'
      onClick={(e) => handleSelectPlaylist(playlist)}>
    <CardHeader
      title={playlist.title}
      sx={{py:0, my:0}}
    />
    </Button>
    </CardActionArea>
    <CardActions disableSpacing>
      <FavIconPlaylist />
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => handleDeletePlaylist({ playlist })}>
        <DeleteIcon />
      </IconButton>
    </CardActions>
    </Box>
  </Card>
  </div>
  )
  })}
  </Box>
  </Widget>
  );
}

export default AddPlayList;
