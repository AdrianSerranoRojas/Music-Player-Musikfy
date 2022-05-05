import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../SongCard/SongCard";
import { useGetSongsQuery } from "../../../services/songApi";

function LikesCard() {
  const { data, isLoading, isSuccess } = useGetSongsQuery();
  console.log(data);

  return (
    <>
      <Box>
        <Typography variant="h5">Most liked Songs!</Typography>
        {isSuccess &&
          data.data.map((song, index) => {
            return <SongCard key={index} songName={song.songName} songUrl={song.songUrl} />;
          })}
      </Box>
    </>
  );
}

export default LikesCard;
