import { useSelector } from "react-redux";

import QueueCard from "../QueueCard/QueueCard";
import Card from '@mui/material/Card';

const QueueListing = () => {
    const currentSong = useSelector((state) => state.songs.currentSong);
    console.log(currentSong);

    return(
        <div className="QueueListContainer">
                {currentSong[0].audio !== "" &&
                    currentSong.map((song, index) => {
                        return(
                            <QueueCard key={index} songName={song.songName} />
                        );
                    })
                }
                {currentSong[0].audio === "" &&
                    <Card>
                        <p>Add songs to the Queue! </p>
                    </Card>
                }
        </div>
    )
}

export default QueueListing;