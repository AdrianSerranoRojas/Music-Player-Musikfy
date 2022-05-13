import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "@mui/material/Typography";

function PlaylistsCard() {
  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [createPlaylist, result] = useCreatePlaylistMutation();
  const [deletePlaylist, resultDelete] = useDeletePlaylistMutation();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation();
  const [playlistName, setPlaylistName] = useState("List");

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
                <Typography variant="subtitle1" align="center">
                  {playlist.title}
                </Typography>
                <button
                  className="btn btn-warning"
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

export default PlaylistsCard;