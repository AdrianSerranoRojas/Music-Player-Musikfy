import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "@mui/material/Typography";

function PlaylistsCard() {
    return(
        <Box>
            <Typography variant='h5'>
                Most liked Playlists!
            </Typography>
                <ImageList sx={{ width: 750, height: 440 }} cols={3}>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Jazz Playlist
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola"/>
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Rap Playlist
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                </ImageList>
            </Box>
    )
}

export default PlaylistsCard;