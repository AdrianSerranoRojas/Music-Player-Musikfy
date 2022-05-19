import { Typography } from '@mui/material';
import Card from '@mui/material/Card';

const QueueCard = ({songName, songArtist}) => {
    return (
        <Card >
            <Typography variant="body2">{songName} - {songArtist}</Typography>
        </Card>
    )
}

export default QueueCard;