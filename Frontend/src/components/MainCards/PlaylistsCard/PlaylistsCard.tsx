import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import {
  useGetPlaylistsQuery,
  useCreatePlaylistMutation,
} from "../../../services/playlistApi";

function PlaylistsCard() {
  const { data, isLoading, isSuccess } = useGetPlaylistsQuery();
  const [createPlaylist, result] = useCreatePlaylistMutation();
  const [playlistName, setPlaylistName] = useState("List");

  async function handleCreatePlaylist() {
    await createPlaylist({ title: playlistName });
  }

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" align="center" fontFamily="Vollkorn, serif">
        Most liked Playlists!
        <div>
          <input type="text" onChange={(e) => handleChange(e)} />
          <button onClick={handleCreatePlaylist}>Create Playlist</button>
        </div>
      </Typography>
      <hr />
      <ImageList sx={{ width: 800, height: 460 }} cols={4}>
        {isSuccess &&
          data.data.map((playlist, index) => {
            return (
              <ImageListItem key={index}>
                <Typography variant="subtitle1" align="center">
                  {playlist.title}
                </Typography>
                {/* <img src={playlist.playlistImg} alt="hola" /> */}
              </ImageListItem>
            );
          })}
      </ImageList>
    </Box>
  );
}

export default PlaylistsCard;
