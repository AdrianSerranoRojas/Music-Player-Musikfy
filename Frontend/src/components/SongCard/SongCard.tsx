import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from '@mui/icons-material/Add';
import { height } from "@mui/system";
import { addCurrentSong, songsSelector } from "../../features/song/songsSlice";
import { useDispatch, useSelector } from "react-redux";
import DropdownAddPlaylist from "../Dropdown/AddPlaylist/AddPlaylist";

function SongCard({ songName, songUrl }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  console.log(songUrl);

  const handleClick = () => {
    dispatch(addCurrentSong({isPlaying: true, audio: songUrl}));
  };
  return (
    <Card variant="outlined" sx={{ display: "flex", height: 110 }}>
      <CardMedia
        component="img"
        sx={{ width: 110, height: 110 }}
        image="https://m.media-amazon.com/images/I/81hF73Kv9GL._SY355_.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {songName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            3:14
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="play/pause" onClick={handleClick}>
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <IconButton>
          <FavoriteIcon sx={{ height: 30, width: 30 }}/>
        </IconButton>
        <IconButton>
          <AddIcon sx={{ height: 30, width: 30 }}/>
        </IconButton>
      </Box>
      <DropdownAddPlaylist />
    </Card>
  );
}

export default SongCard;
