import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../SongCard/SongCard";
import { useGetSongsQuery } from "../../../services/songApi";

function LikesCard() {
  const { data, isLoading, isSuccess } = useGetSongsQuery();
  console.log(data);

  return (
    <>
      <Box sx={{maxwidth: 750,
            maxheight: 440}}>
        <Typography variant="h5" align='center' fontFamily='Vollkorn, serif'>Most liked Songs!</Typography>
        {isSuccess &&
          data.data.map((song, index) => {
            return <SongCard key={index} songName={song.songName} songUrl={song.songFile.url} />;
          })}
      </Box>
    </>
  );
}

export default LikesCard;
