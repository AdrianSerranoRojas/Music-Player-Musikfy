import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard2 from "../SongCard/SongCard2";


function SongListOfPlaylist({ listSelect, list }) {
  const id = listSelect?._id;

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
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            {listSelect.map((song, index) => {
              return (
                <Box>
                  <SongCard2
                    songId={song._id}
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
      )
}

export default SongListOfPlaylist;
