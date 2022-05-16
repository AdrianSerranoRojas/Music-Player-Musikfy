import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import withLayout from "../../hoc/withLayout";

import AddPlayList from "../../components/MainCards/AddPlayList/AddPlayList";
import SongListOfPlaylist from "../../components/SongListOfPlaylist/SongListOfPlaylist";
import { useState } from "react";
import {
  useGetPlaylistQuery,

} from "../../services/playlistApi";
import { Spinner } from "../../components/Spinner/Spinner";
import { Typography } from "@mui/material";

function Playlists() {
  const [listSelect, setListSelect] = useState();
  const [playlistId, setplaylistId] = useState();

  const listSelectFunc = (list) => {
    setListSelect(list);
    setplaylistId(list._id)
  };

  const { data, isLoading, isSuccess, refetch } = useGetPlaylistQuery(playlistId);
  let playlistSongThisList =[]
  if (isSuccess){
    playlistSongThisList = data.data[0].songs
    console.log("m estoy liandooooo",playlistSongThisList);
    
  }

  // const WallPaper = styled("div")({
  //   position: "fixed",
  //   width: "100%",
  //   height: "100%",
  //   top: 0,
  //   left: 0,
  //   overflow: "hidden",
  //   background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  //   transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  //   "&:before": {
  //     content: '""',
  //     width: "140%",
  //     height: "140%",
  //     position: "fixed",
  //     top: "-40%",
  //     right: "-50%",
  //     background:
  //       "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  //   },
  //   "&:after": {
  //     content: '""',
  //     width: "140%",
  //     height: "140%",
  //     position: "fixed",
  //     bottom: "-50%",
  //     left: "-30%",
  //     background:
  //       "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
  //     transform: "rotate(30deg)",
  //   },
  // });

  // const Widget = styled("div")(({ theme }) => ({
  //   padding: 16,
  //   borderRadius: 16,
  //   width: 950,
  //   maxWidth: "100%",
  //   margin: "auto",
  //   marginBottom: 25,
  //   position: "relative",
  //   zIndex: 1,
  //   backgroundColor:
  //     theme.palette.mode === "dark"
  //       ? "rgba(0,0,0,0.6)"
  //       : "rgba(255,255,255,0.4)",
  //   backdropFilter: "blur(40px)",
  // }));

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',gap: 3}}>
        <AddPlayList  listSelectFunc={listSelectFunc} />
        {listSelect ? (
          // <SongListOfPlaylist  playlistSongThisList={playlistSongThisList} listSelect={listSelect} />
          <SongListOfPlaylist listSelect={listSelect} />
        ) :<Typography sx={{ml: 30, mt: 35}} variant="h3">Select a list</Typography>}
    </Box>
  );
}

export default withLayout(Playlists);
