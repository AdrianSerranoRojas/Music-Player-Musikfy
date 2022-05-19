import { useEffect } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import SongCard from "../../components/SongCard/SongCard";

import {
  useGetMySongsQuery,
} from "../../services/songApi";

import withLayout from "../../hoc/withLayout";

import AddSongButton from "../../components/AddSongButton/AddSongButton";

import "../MySongs/MySongs.scss";

function MySongs() {
  const Widget = styled("div")(({ theme }) => ({
    overflowY: "scroll",
    padding: 16,
    borderRadius: 16,
    width: 900,
    maxWidth: "100%",
    margin: "auto",
    height: "60vh",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));

  const { data, isLoading, isSuccess } = useGetMySongsQuery();
  // const { data, isLoading, isSuccess } = useGetSongsFilteredQuery("basote");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isSuccess && (
        <Box sx={{ pt: 7 }}>
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
                My Songs!!!
                <AddSongButton />
              </Typography>
              {isSuccess &&
                data.data.map((song, index) => {
                  return (
                    <SongCard
                      key={index}
                      songName={song.songName}
                      songUrl={song.songFile.url}
                      songId={song.id}
                      song={song}
                    />
                  );
                })}
            </Box>
          </Widget>
        </Box>
      )}
    </>
  );
}

export default withLayout(MySongs);
