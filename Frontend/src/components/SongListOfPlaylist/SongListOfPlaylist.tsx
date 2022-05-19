import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import SongCard from "../SongCard/SongCard";

const Widget = styled("div")(({ theme }) => ({
  overflowY: "hidden",
  maxWidth: "100%",
  height: "27vh",
  zIndex: 1,
  overflow: "scroll",
}));

function SongListOfPlaylist({ listSelect, list }) {
  const id = listSelect?._id;

  return (
    <>
      <Box sx={{ mt: 7 }}>
        <Typography
          variant="h4"
          align="center"
          fontFamily="Vollkorn, serif"
        >
            {list.title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontFamily="Vollkorn, serif"
        >
            {listSelect.length} songs
        </Typography>
      </Box>
    <Widget>
      <Box>
        <Box sx={{ mt: 1 }}>
          {listSelect.map((song, index) => {
            return (
              <Box key={index}>
                <SongCard song={song} id={id} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Widget>
    </>
  );
}

export default SongListOfPlaylist;
