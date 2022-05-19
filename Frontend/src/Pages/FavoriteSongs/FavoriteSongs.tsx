import { useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SongCard from "../../components/SongCard/SongCard";
import {
  useGetMySongsQuery,
  useGetSongsFilteredQuery,
  useGetMyLikedSongsQuery,
} from "../../services/songApi";
import "../MySongs/MySongs.scss";
import withLayout from "../../hoc/withLayout";
import AddSongButton from "../../components/AddSongButton/AddSongButton";

function FavoriteSongs() {
  const Widget = styled("div")(({ theme }) => ({
    overflow: "scroll",
    padding: 16,
    borderRadius: 16,
    width: 830,
    maxWidth: "100%",
    height: "60vh",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));

  const { data, isLoading, isSuccess } = useGetMyLikedSongsQuery();
  // const { data, isLoading, isSuccess } = useGetSongsFilteredQuery("basote");

  return (
    <>
      {isSuccess && (
        <Box sx={{ pt: 5 }}>
          <Widget
            sx={{
              boxShadow: 4,
              p: 2,
              maxwidth: 750,
              maxheight: 440,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                align="center"
                fontFamily="Vollkorn, serif"
              >
                My Liked Songs
              </Typography>
              {isSuccess &&
                data.data.myFavoriteSongs.map((song, index) => {
                  return <SongCard key={index} song={song} />;
                })}
            </Box>
          </Widget>
        </Box>
      )}
    </>
  );
}

export default withLayout(FavoriteSongs);
