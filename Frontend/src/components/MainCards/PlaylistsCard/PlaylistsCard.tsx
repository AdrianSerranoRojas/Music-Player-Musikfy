import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "@mui/material/Typography";
import {useGetPlaylistsQuery} from "../../../services/songApi";

function PlaylistsCard() {
    const { data, isLoading, isSuccess } = useGetPlaylistsQuery();
    console.log(data);
    return(
        <Box>
            <Typography variant='h5' align='center' fontFamily='Vollkorn, serif'>
                Most liked Playlists!
            </Typography>
            <hr />
                <ImageList sx={{ width: 800, height: 460 }} cols={4}>
                    {isSuccess && 
                        data.data.map((playlist, index) => {
                            return(<ImageListItem key={index}>
                                <Typography variant='subtitle1' align='center'>
                                    {playlist.playlistName}
                                </Typography>
                                <Typography variant='subtitle2' align='center'>
                                    23 songs
                                </Typography>
                                    <img src={playlist.playlistImg} alt="hola" />
                                </ImageListItem>)
                        })
                    }
                </ImageList>
            </Box>
    )
}

export default PlaylistsCard;