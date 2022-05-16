import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../SongCard/SongCard";
import { useGetSongsQuery } from "../../../services/songApi";

function SongListOfPlaylist() {
  const { data, isLoading, isSuccess } = useGetSongsQuery();

  return (
    <>
      <Box sx={{ maxwidth: 750, maxheight: 440 }}>
        <Typography variant="h5" align="center" fontFamily="Vollkorn, serif">
          Most liked Songs!
        </Typography>
        {isSuccess &&
          data.data.map((song, index) => {
            return (
              <SongCard
                songName={song?.songData?.title}
                songUrl={song.songFile.url}
                key={index}
                songArtist={song?.songData?.artist}
                id={song._id}
              />
            );
          })}
      </Box>
    </>
  );
}

export default SongListOfPlaylist;
