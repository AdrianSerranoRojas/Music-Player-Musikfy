import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import QueueCard from "../QueueCard/QueueCard";

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
        </div>
    )
}

export default QueueListing;