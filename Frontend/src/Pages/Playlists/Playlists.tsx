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
    console.log("list._id",list._id);
    console.log("list",list);
    
  };

  const { data, isLoading, isSuccess, refetch } = useGetPlaylistQuery(playlistId);
  let playlistSongThisList =[]
  if (isSuccess){
    console.log("el puto dataaa",data);
    playlistSongThisList = data.data[0].songs
     console.log("m estoy liandooooo",playlistSongThisList);
  }

  return (
    <Box>
        <AddPlayList listSelectFunc={listSelectFunc} />
        {listSelect ? (
          // <SongListOfPlaylist  playlistSongThisList={playlistSongThisList} listSelect={listSelect} />
          <SongListOfPlaylist listSelect={playlistSongThisList} list={listSelect} />
        ) :<Typography sx={{mx: "auto", mt: 12}} variant="h3">Select a list</Typography>}
    </Box>
  );
}

export default withLayout(Playlists);
