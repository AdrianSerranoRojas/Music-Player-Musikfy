import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongCard from '../../SongCard/SongCard';



function LikesCard() {
    return(
        <>
        <Box>
            <Typography variant='h5' align='center' fontFamily='Vollkorn, serif'>
                Most liked Songs!
            </Typography>
            <hr />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
        </Box>
        </>
    )
}

export default LikesCard;