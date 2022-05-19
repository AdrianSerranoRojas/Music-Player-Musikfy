import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import PlaylistCard from "../../PlaylistCard/PlaylistCard";
import styled from '@mui/material/styles/styled';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import {
  useGetPlaylistsQuery,
  useUpdatePlaylistMutation,
  useCreatePlaylistMutation,
} from "../../../services/playlistApi";

import "./AddPlayList.scss";

const Widget = styled("div")(({ theme }) => ({
  overflowY: "hidden",
  maxWidth: "100%",
  height: "25vh",
  zIndex: 1,
  overflow: "scroll",
}));

function AddPlayList({ listSelectFunc, refetching }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [first, setFirst] = useState(false)

  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [createPlaylist, result] = useCreatePlaylistMutation();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation();

  const [playlistName, setPlaylistName] = useState("List");


  async function handleCreatePlaylist() {
    await createPlaylist({ title: playlistName });
    refetch();
  }

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const playlistTxt = "Playlist title: "

  return (
    <>
    <Typography variant="h4" align="center" fontFamily="Vollkorn, serif" >
        All the Playlists!
    </Typography>
    <Widget>
    <Box>
    <Card className='playlistBg'>
    <CardHeader
      title="Create Playlist"
      sx={{pt:2, pb:0, my:0}}
    />
    <IconButton aria-label="add" onClick={handleOpen} sx={{ml: 9}}>
      <AddCircleIcon sx={{ height: 35, width: 35 }}/>
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
              <PlaylistCard key={index} playlist={playlist} refetch={refetch} listSelectFunc={listSelectFunc} />
  )
  })}
  </Box>
  </Widget>
  </>
  );
}

export default AddPlayList;
