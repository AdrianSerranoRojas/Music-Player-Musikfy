import { useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import SongCard from "../../components/SongCard/SongCard";
import { useGetSongsFilteredQuery } from "../../services/songApi";
import { songsSelector } from "../../features/song/songsSlice";

function SearchSongListing() {
  const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 830,
    maxWidth: "100%",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));

  const { filterSong } = useSelector(songsSelector);
  const { data, isLoading, isSuccess } = useGetSongsFilteredQuery(filterSong);

  useEffect(() => {
  }, [data]);

  return (
    <>
      <Box sx={{ pt: 5 }}>
        <Widget
          sx={{
            boxShadow: 4,
            p: 2,
            maxwidth: 750,
            maxheight: 200,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              align="center"
              fontFamily="Vollkorn, serif"
            >
              Songs!
            </Typography>
            {isSuccess &&
              data.data.map((song, index) => {
                return (
                  <SongCard
                    key={index}
                    songName={song.songName}
                    songUrl={song.songFile.url}
                    songId={song._id}
                  />
                );
              })}
          </Box>
        </Widget>
      </Box>
    </>
  );
}

export default SearchSongListing;