import { useSelector } from "react-redux";

import QueueCard from "../QueueCard/QueueCard";

import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";

const QueueListing = () => {
    const currentSong = useSelector((state) => state.songs.currentSong);

    return(
        <div className="QueueListContainer">

                {currentSong[0].audio !== "" &&
                    currentSong.map((song, index) => {
                        return(
                            <QueueCard key={index} songName={song.songName} songArtist={song.songArtist}/>
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