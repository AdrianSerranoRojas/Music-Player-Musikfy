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

function AddPlayList({ listSelectFunc }) {
 
  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [createPlaylist, result] = useCreatePlaylistMutation();
  const [deletePlaylist, resultDelete] = useDeletePlaylistMutation();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation();

  const [playlistName, setPlaylistName] = useState("List");

  function handleSelectPlaylist(playlist) {
    listSelectFunc(playlist);
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
                <button
                  onClick={(e) => handleSelectPlaylist(playlist)}
                  className="btn btn-link"
                >
                  {playlist.title}
                </button>
                <button
                  className="btn btn-warning mt-2"
                  onClick={() => handleDeletePlaylist({ playlist })}
                >
                  delete
                </button>
                {/* <img src={playlist.playlistImg} alt="hola" /> */}
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleUpdatePlaylist({ playlist })}
                >
                  update
                </button>
              </ImageListItem>
            );
          })}
      </ImageList>
    </Box>
  );
}

export default AddPlayList;
