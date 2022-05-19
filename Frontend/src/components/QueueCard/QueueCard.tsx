import { Typography } from "@mui/material";
import Card from "@mui/material/Card";

const QueueCard = ({ songName, songArtist }) => {
  return (
    <Card
      sx={{
        my: "2px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          my: "2px",
          textAlign: "center",
          fontSize: "15px",
          // color:"black",
          fontWeight: "400"
        }}
        variant="body2"
      >
        Song: {songName}
      </Typography>
      <Typography variant="body2">Artist: {songArtist}</Typography>
    </Card>
  );
};

export default QueueCard;
