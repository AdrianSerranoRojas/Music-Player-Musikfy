import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import QueueCard from "../QueueCard/QueueCard";

const QueueListing = () => {
    const currentSong = useSelector((state) => state.songs.currentSong);
    console.log(currentSong);

    return(
        <>
            <Box sx={{ maxwidth: 750, maxheight: 440 }}>
                {currentSong[0].audio !== "" &&
                    currentSong.map((song, index) => {
                        return(
                            <QueueCard key={index} songName={song.songName} />
                        );
                    })
                }
            </Box>
        </>
    )
}

export default QueueListing;