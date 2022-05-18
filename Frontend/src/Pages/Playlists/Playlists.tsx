import { useState } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import withLayout from "../../hoc/withLayout";

import AddPlayList from "../../components/MainCards/AddPlayList/AddPlayList";
import SongListOfPlaylist from "../../components/SongListOfPlaylist/SongListOfPlaylist";

import { useGetPlaylistQuery } from "../../services/playlistApi";

function Playlists() {
  const [listSelect, setListSelect] = useState();
  const [playlistId, setplaylistId] = useState();

  const listSelectFunc = (list) => {
    setListSelect(list);
    setplaylistId(list._id);
  };
  
  const { data, isLoading, isSuccess, refetch } =
    useGetPlaylistQuery(playlistId);

  let playlistSongThisList = [];
  if (isSuccess) {
    playlistSongThisList = data.data[0].songs;
  }

  return (
    <Box>
      <AddPlayList listSelectFunc={listSelectFunc} refetching={refetch}/>
      {listSelect ? (
        <SongListOfPlaylist
          listSelect={playlistSongThisList}
          list={listSelect}
        />
      ) : (
        <Typography sx={{ mx: "auto", mt: 12 }} variant="h3">
          Select a list
        </Typography>
      )}
    </Box>
  );
}

export default withLayout(Playlists);
