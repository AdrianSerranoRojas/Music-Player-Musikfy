import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardActionArea} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavIconPlaylist from "../FavIcon/FavIconPlaylist";
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
    useGetPlaylistsQuery,
    useGetPlaylistQuery,
    useDeletePlaylistMutation,
    useUpdatePlaylistMutation,
    useCreatePlaylistMutation,
  } from "../../services/playlistApi";
  import { useDispatch, useSelector } from "react-redux";
  import {
    addCurrentSong,
    addFirstCurrentSong,
    songsSelector,
    addPlayQueue,
  } from "../../features/song/songsSlice";

const PlaylistCard = ({playlist, refetch, listSelectFunc, refetching }) => {
    const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.songs.currentSong);
    const [deletePlaylist, resultDelete] = useDeletePlaylistMutation();
    const { data } = useGetPlaylistQuery(playlist._id);
    
    function handleSelectPlaylist(playlist) {
          listSelectFunc(playlist);
          refetching();
    }

    async function handleDeletePlaylist() {
        await deletePlaylist(playlist._id);
        refetch();
      }

    function handlePlayPlaylist() {
        const songData = data.data[0].songs;
        songData.map((song, index) => {
            if (index === 0){
                dispatch(
                    addFirstCurrentSong([{
                        isPlaying: true,
                        audio: song.songFile.url,
                        songName: song.songData.title,
                        songArtist: song.songData.artist,
                    }])
                )
            }
            else if(index !== 0){
                dispatch(
                    addPlayQueue({
                    isPlaying: true,
                    audio: song.songFile.url,
                    songName: song.songData.title,
                    songArtist: song.songData.artist,
                })
            )}
        })
    }
    return(
        <Card sx={{mt:0.2}}>
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
        onClick={handleDeletePlaylist}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="share" onClick={() => handlePlayPlaylist({ playlist })}>
        <PlayArrowIcon />
      </IconButton>
    </CardActions>
    </Box>
  </Card>
    );
}

export default PlaylistCard;