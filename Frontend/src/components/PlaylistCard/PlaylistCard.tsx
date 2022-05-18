import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import { Button, CardActionArea} from "@mui/material";
import Grid from '@mui/material/Grid';

import FavIconPlaylist from "../FavIcon/FavIconPlaylist";
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import {
    useGetPlaylistQuery,
    useDeletePlaylistMutation,
  } from "../../services/playlistApi";

import { useDispatch, useSelector } from "react-redux";

import {
    addFirstCurrentSong,
    addPlayQueue,
  } from "../../features/song/songsSlice";

const PlaylistCard = ({playlist, refetch, handleSelectPlaylist }) => {
    const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.songs.currentSong);
    const [deletePlaylist, resultDelete] = useDeletePlaylistMutation();
    const { data } = useGetPlaylistQuery(playlist._id);
    
    // function handleSelectPlaylist(playlist) {
    //       listSelectFunc(playlist);
    //       refetching();
    // }

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
  <Card sx={{mt:0.2}} className="playlistBg">
    <Box >
        <Grid container>
            <Grid item xs={12}>
                <CardActions>
                <button
                className='imgButtonPlaylist'
                onClick={() => handleSelectPlaylist(playlist)}>
                <CardHeader
                title={playlist.title}
                sx={{py:0, my:0}}
                className="hoverPlaylist"
                />
                </button>
                </CardActions>
            </Grid>
            <Grid item xs={8} sx={{ml:4}}>
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
            </Grid>
        </Grid>
    </Box>
  </Card>
    );
}

export default PlaylistCard;