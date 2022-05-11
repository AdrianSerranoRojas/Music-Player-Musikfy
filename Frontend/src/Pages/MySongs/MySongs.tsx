import { useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SongCard from "../../components/SongCard/SongCard";
import {
  useGetMySongsQuery,
  useGetSongsFilteredQuery,
} from "../../services/songApi";
import "../MySongs/MySongs.scss";
import withLayout from "../../hoc/withLayout";

function MySongs() {
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

  // const { data, isLoading, isSuccess } = useGetMySongsQuery();
  const { data, isLoading, isSuccess } = useGetSongsFilteredQuery("basote");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Box sx={{ pt: 15 }}>
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
              My Songs!
            </Typography>
            {isSuccess &&
              data.data.map((song, index) => {
                return (
                  <SongCard
                    key={index}
                    songName={song.songName}
                    songUrl={song.songFile.url}
                  />
                );
              })}
          </Box>
        </Widget>
      </Box>
    </>
  );
}

export default withLayout(MySongs);
