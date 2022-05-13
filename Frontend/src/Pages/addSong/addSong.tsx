import AddSongForm from "../../components/AddSongForm/AddSongForm";
import withLayout from "../../hoc/withLayout";
import { styled } from "@mui/material/styles";

const Widget = styled("div")(({ theme }) => ({
  overflowX: "hidden",
  padding: 16,
  borderRadius: 16,
  width: "80%",
  maxWidth: "100%",
  marginTop: "4%",
  marginLeft: "12.5%",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

function AddSong() {
  return (
    <>
      <Widget
        sx={{
          boxShadow: 4,
          p: 2,
          maxheight: 440,
        }}
      >
        <AddSongForm />
      </Widget>
    </>
  );
}
export default withLayout(AddSong);
