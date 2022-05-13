import  React from "react";
import {useNavigate} from "react-router-dom"
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import {
  useGetPlaylistsQuery,
  useCreatePlaylistMutation,
  useUpdatePlaylistMutation
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

const names = [
    'Sad Songs',
    'Paleta Songs',
];

function DropdownAddPlaylist() {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useGetPlaylistsQuery();
  const [updatePlaylist, resultUpdate] = useUpdatePlaylistMutation
  ();
  const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
    const {
        target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleAddSongPlaylist = (name) => {
    console.log(name._id);
    const body= {song:["unaCancion"]}
    console.log(body);
    updatePlaylist(name._id,body)
    refetch()
  };
  return (
    <div>
        <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Add to a Playlist</InputLabel>
        <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Add" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
        >
            {names.map((name) => (
            <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    </div>
  );
}

export default DropdownAddPlaylist;