import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import SongCard from "../../components/SongCard/SongCard";

import { useGetSongsFilteredQuery } from "../../services/songApi";

import { songsSelector } from "../../features/song/songsSlice";

const Widget = styled("div")(({ theme }) => ({
  overflowY: "scroll",
  padding: 0,
  height: "70.5vh",
  borderRadius: 0,
  width: "100%",
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "#0000000" : "#0000000",
  // backdropFilter: "blur(40px)",
}));

function SearchSongListing() {
  const { filterSong } = useSelector(songsSelector);
  const { data, isLoading, isSuccess } = useGetSongsFilteredQuery(filterSong);

  return (
    <>
      {isSuccess && (
        <Box sx={{ pt: 0 }}>
          <Widget
            sx={{
              boxShadow: 0,
              p: 2,
              maxwidth: 750,
              maxheight: 200,
            }}
          >
            <Box>
              {isSuccess &&
                data.data.map((song, index) => {
                  return <SongCard key={index} song={song}/>;
                })}
            </Box>
          </Widget>
        </Box>
      )}
    </>
  );
}

export default SearchSongListing;
