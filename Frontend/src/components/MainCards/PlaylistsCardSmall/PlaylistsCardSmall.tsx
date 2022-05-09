import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "@mui/material/Typography";

function PlaylistsCard() {
    return(
        <Box>
            <hr />
                <ImageList sx={{ width: 920, height: 460 }} cols={4}>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        23 songs
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Jazz Playlist
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        23 songs
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola"/>
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Rap Playlist
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        23 songs
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        23 songs
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        23 songs
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                    <ImageListItem>
                    <Typography variant='subtitle1' align='center'>
                        Sad Playlist
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        23 songs
                    </Typography>
                        <img src="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg" alt="hola" />
                    </ImageListItem>
                </ImageList>
            </Box>
    )
}

export default PlaylistsCard;