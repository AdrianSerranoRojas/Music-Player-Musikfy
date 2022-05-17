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
    console.log(data);
    playlistSongThisList = data.data[0].songs
    console.log("m estoy liandooooo",playlistSongThisList);
    
  }

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
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', overflowX:'scroll'}}>
        <AddPlayList  listSelectFunc={listSelectFunc} />
        {isSuccess ? (
          // <SongListOfPlaylist  playlistSongThisList={playlistSongThisList} listSelect={listSelect} />
          <SongListOfPlaylist listSelect={playlistSongThisList} list={listSelect} />
        ) :<Typography sx={{ml: 30, mt: 35}} variant="h3">Select a list</Typography>}
    </Box>
  );
}

export default withLayout(Playlists);
