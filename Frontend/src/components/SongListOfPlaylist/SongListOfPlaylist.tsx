import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../SongCard/SongCard";

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
                <SongCard song={song} key={index} id={id} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default SongListOfPlaylist;
