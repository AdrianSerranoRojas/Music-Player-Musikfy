import React from "react";

import { useNavigate } from "react-router-dom";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

import {
  useGetPlaylistsQuery,
  useUpdatePlaylistMutation,
} from "../../../services/playlistApi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function DropdownAddPlaylist({ id }) {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleAddSongPlaylist = (name) => {
    const idPlaylist = name._id;
    updatePlaylist({ idPlaylist, id });
    refetch();
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 240 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Playlist</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {isSuccess &&
            data.data.map((name,index) => (
              <MenuItem key={index} value={name.title}>
                <Checkbox key={name.title} checked={personName.indexOf(name.title) > -1} />
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => handleAddSongPlaylist(name)}
                >
                  Select
                </Button>
                <ListItemText primary={name.title} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropdownAddPlaylist;
