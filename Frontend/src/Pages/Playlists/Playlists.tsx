import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import withLayout from "../../hoc/withLayout";

import AddPlayList from "../../components/MainCards/AddPlayList/AddPlayList";
import SongListOfPlaylist from "../../components/SongListOfPlaylist/SongListOfPlaylist";
import { useState } from "react";
import { useGetPlaylistQuery } from "../../services/playlistApi";
import { Spinner } from "../../components/Spinner/Spinner";
import { Typography } from "@mui/material";

function Playlists() {
  const [listSelect, setListSelect] = useState();
  const [playlistId, setplaylistId] = useState();

  
  const { data, isLoading, isSuccess, refetch } =
  useGetPlaylistQuery(playlistId);
  
  const listSelectFunc = async (list) => {
    await setListSelect(list);
    setplaylistId(list._id);
    refetch()
  };

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
        <Typography sx={{ mx: "auto", mt: 5, textAlign: "center" }} variant="h3">
          Select a list
        </Typography>
      )}
    </Box>
  );
}

export default withLayout(Playlists);
