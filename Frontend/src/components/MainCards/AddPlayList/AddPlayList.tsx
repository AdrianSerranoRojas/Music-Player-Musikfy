import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import PlaylistCard from "../../PlaylistCard/PlaylistCard";
import styled from "@mui/material/styles/styled";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  useGetPlaylistsQuery,
  useUpdatePlaylistMutation,
  useCreatePlaylistMutation,
} from "../../../services/playlistApi";

import "./AddPlayList.scss";
import { useNavigate } from "react-router-dom";

const Widget = styled("div")(({ theme }) => ({
  overflowY: "hidden",
  maxWidth: "100%",
  height: "25vh",
  zIndex: 1,
  overflow: "scroll",
}));

function AddPlayList({ listSelectFunc, refetching }) {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [first, setFirst] = useState(false);

  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [createPlaylist, result] = useCreatePlaylistMutation();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation();

  const [playlistName, setPlaylistName] = useState("List");

  async function handleCreatePlaylist() {
    await createPlaylist({ title: playlistName });
    refetch();
    handleClose();
  }

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const playlistTxt = "Playlist title: ";

  return (
    <>
      <Typography variant="h4" align="center" fontFamily="Vollkorn, serif">
        All the Playlists!
      </Typography>
      <Widget>
        <Box>
          <Card className="playlistBg">
            <div className="container d-flex justify-content-center">
              <CardHeader title="Create Playlist" />
              <IconButton aria-label="add" onClick={handleOpen}>
                <AddCircleIcon sx={{ height: 35, width: 35 }} />
              </IconButton>
            </div>

            <Modal open={open} onClose={handleClose}>
              <Card
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  position: "absolute" as "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  // bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,

                  bgcolor:
                    theme.palette.mode === "dark"
                      ? theme.palette.mode.primary
                      : "primary",
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  fontFamily="Vollkorn, serif"
                >
                  Create playlist
                </Typography>
                <hr />
                <TextField
                  label="Title"
                  variant="filled"
                  onChange={(e) => handleChange(e)}
                  sx={{ textAlign: "center" }}
                />
                <br></br>
                <Box sx={{ my: 1 }} textAlign="center">
                  <Button onClick={handleCreatePlaylist} variant="contained">
                    Create
                  </Button>
                </Box>
              </Card>
            </Modal>
          </Card>
          {isSuccess &&
            data.data.map((playlist, index) => {
              return (
                <PlaylistCard
                  key={index}
                  playlist={playlist}
                  refetch={refetch}
                  listSelectFunc={listSelectFunc}
                />
              );
            })}
        </Box>
      </Widget>
    </>
  );
}

export default AddPlayList;
