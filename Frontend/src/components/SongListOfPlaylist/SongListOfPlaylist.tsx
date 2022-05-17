import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../components/SongCard/SongCard";
import { useGetSongQuery } from "../../services/songApi";
import PlaylistModal from "../PlaylistModal/PlaylistModal";

function SongListOfPlaylist({ listSelect, list }) {
  const id = listSelect?._id;
  // console.log("aaaaaaaaaaaaaa", id);
  // console.log("aaaaa listSelect   aaaaaaaaa", listSelect);
  // console.log("aaaaaa   list    aaaaaaaa", list);
  const { data, isLoading, isSuccess } = useGetSongQuery(id);
  // if (isSuccess) {
  //   console.log("aqui que haydddddddddddd", data);
  // }

  // console.log("<<<<<<<<<listSelect", listSelect);

  return (
    <>
      <Box>
        <Box>
          <Box sx={{ mt: 7 }}>
            <Typography
              variant="h2"
              align="center"
              fontFamily="Vollkorn, serif"
            >
              {list.title}
            </Typography>
            <Typography
              variant="h4"
              align="center"
              fontFamily="Vollkorn, serif"
            >
              {listSelect.length} songs
            </Typography>
            <PlaylistModal />
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          {listSelect.map((song, index) => {
            return (
              <Box>
                <SongCard
                  songName={song.songData.title}
                  songUrl={song.songFile.url}
                  key={index}
                  songArtist={song.songData.artist}
                  id={id}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
{
  /* {isSuccess && */
}
{
  /* {listSelect.songs.map((song, index) => {
          return (
            <SongCard
              songName={song?.songData?.title}
              songUrl={song.songFile.url}
              key={index}
              songArtist={song?.songData?.artist}
              id={song._id}
            />
          );
        })} */
}

export default SongListOfPlaylist;
