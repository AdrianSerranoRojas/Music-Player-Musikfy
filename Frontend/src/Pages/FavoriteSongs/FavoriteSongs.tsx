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
    width: "100%",
    // maxWidth: "100%",
    height: "60vh",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "#0000000"
        : "#ffffff0",
    // backdropFilter: "blur(40px)",
  }));

  const { data, isLoading, isSuccess, refetch } = useGetMyLikedSongsQuery();
  // const { data, isLoading, isSuccess } = useGetSongsFilteredQuery("basote");
  useEffect(() => {
    refetch();
  }, [])

  return (
    <>
      {isSuccess && (
        <Box sx={{ pt: 5 }}>
          <Widget
            sx={{
              
              p: 2,
              // maxwidth: 950,
              // maxheight: 440,
              // width: "80%",
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
