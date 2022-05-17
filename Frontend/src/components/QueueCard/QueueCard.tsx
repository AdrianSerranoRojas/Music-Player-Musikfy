import Card from '@mui/material/Card';

const QueueCard = ({songName}) => {
    return (
        <Card>
            <p>{songName}</p>
        </Card>
    )
}

export default QueueCard;