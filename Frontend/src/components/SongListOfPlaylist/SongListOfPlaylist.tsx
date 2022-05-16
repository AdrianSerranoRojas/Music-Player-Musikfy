import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../components/SongCard/SongCard";
import { useGetSongQuery } from "../../services/songApi";
import PlaylistModal from "../PlaylistModal/PlaylistModal";

function SongListOfPlaylist({ listSelect }) {
  const id = listSelect?._id;
  const { data, isLoading, isSuccess } = useGetSongQuery(id);
  if(isSuccess) {
    console.log(data);
  }

  console.log("<<<<<<<<<listSelect", listSelect.songs);

  return (
    <>
      <Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <img
              src="https://res.cloudinary.com/carapolla/image/upload/v1652111449/samples/imagen_2022-05-09_175006652_famqza.png"
              alt="hola"
            />
            <Box sx={{ mt: 7 }}>
              <Typography
                variant="h2"
                align="center"
                fontFamily="Vollkorn, serif"
              >
                {listSelect.title}
              </Typography>
              <Typography
                variant="h4"
                align="center"
                fontFamily="Vollkorn, serif"
              >
                {listSelect.songs.length} songs
              </Typography>
              <PlaylistModal/>
            </Box>
          </Box>
          <Box
            sx={{ mt: 1 }}>
            {listSelect.songs.map((song, index) => {
                return (
                    <Box>
                      <SongCard
                        songName={song}
                        songUrl={song}
                        key={index}
                        songArtist={song}
                      />
                    </Box>
              )}
                )}
          </Box>
      </Box>
    </>
    );
}
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


export default SongListOfPlaylist;
