import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SongCard from "../../components/SongCard/SongCard";

import withLayout from "../../hoc/withLayout";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useGetSongsQuery } from "../../services/songApi";
import { useState } from "react";

import "../Filter/Filter.scss";

function filter({ songUrl, songName, songArtist, songGenre, userId }) {
  const { data, isLoading, isSuccess } = useGetSongsQuery();

  const [filterData, setFilterData] = useState("");
  console.log(filterData);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setFilterData(e.target.value)}
      />
      <ul className="list">
        {isSuccess &&
          data.data.filter(data=>data.songName.toLowerCase().includes(filterData)).map((song, index) => {
            return (
              <li key={index}>
                <SongCard
                  key={index}
                  songName={song.songName}
                  songUrl={song.songFile.url}
                  song={song}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default withLayout(filter);
