import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SongCard from '../../SongCard/SongCard';



function LikesCard() {
    return(
        <>
        <Box>
            <Typography variant='h5'>
                Most liked Songs!
            </Typography>
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
        </Box>
        </>
    )
}

export default LikesCard;