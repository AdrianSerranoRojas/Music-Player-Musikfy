import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../components/SongCard/SongCard";
import { useGetSongQuery } from "../../services/songApi";

function SongListOfPlaylist({ listSelect }) {
  const id = listSelect?._id;
  const { data, isLoading, isSuccess } = useGetSongQuery(id);
  if(isSuccess) {
    console.log(data);
  }
 
  console.log("<<<<<<<<<listSelect", listSelect.songs);

  return (
    <>
      <Box sx={{ maxwidth: 750, maxheight: 440 }}>
        <Typography variant="h5" align="center" fontFamily="Vollkorn, serif">
          Playlist {listSelect.title}
        </Typography>
        {/* {isSuccess && */}
        {/* {listSelect.songs.map((song, index) => {
          return (
            <SongCard
              songName={song?.songData?.title}
              songUrl={song.songFile.url}
              key={index}
              songArtist={song?.songData?.artist}
              id={song._id}
            />
          );
        })} */}
          {listSelect.songs.map((song, index) => {
          return (
            <SongCard
              songName={song}
              songUrl={song}
              key={index}
              songArtist={song}
            />
          );
        })}
      </Box>
    </>
  );
}

export default SongListOfPlaylist;
