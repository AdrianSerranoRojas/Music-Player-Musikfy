import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import withLayout from "../../hoc/withLayout";
import { createUser, usersSelector } from "../../features/users/usersSlice";
import { getCurrentUserToken } from "../../firebase/firebase";
import { useGetSongsQuery } from "../../services/songApi";
import AuthContext from "../../context/AuthContext";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer"

import SongCard from "../../components/SongCard/SongCard";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard"
import Box from "@mui/material/Box";
import PlaylistsCard from "../../components/MainCards/PlaylistsCard/PlaylistsCard";
import PlayerH5 from "../PlayerH5";

import "./Home.scss"
import { styled } from "@mui/material/styles";

async function fetchUserToken(
  setUserToken: any,
  setLoading: any,
  setError: any
): Promise<void> {
  setLoading(true);
  try {
    const token = await getCurrentUserToken();
    setUserToken(token);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}

const WallPaper = styled("div")({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
      content: '""',
      width: "140%",
      height: "140%",
      position: "fixed",
      top: "-40%",
      right: "-50%",
      background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&:after": {
  content: '""',
  width: "140%",
  height: "140%",
  position: "fixed",
  bottom: "-50%",
  left: "-30%",
  background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
  transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 830,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const Home = () => {
  const [file, setFile] = useState(null);

  // const insertFile = () => {
  //   console.log(file);
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file[0]);
  //   reader.onload = (e) => {
  //     console.log("img data", e.target.result);
  //   };
  // };

    const insertFile = () => {
      console.log(file);
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = (e) => {
        console.log("img data", e.target.result);
      };
    };

    const styles = {
      stickToBottom: {
        width: '100%',
        position: 'sticky',
        bottom: 0,
      },
    };

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files)}
      />
      <button type="submit" onClick={insertFile}>
        uploadimage
      </button>
      {/* <button
        type="submit"
        onClick={() => dispatch(createUser({ username: "pepito" }))}
      >
        click
      </button> */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', ml: 10, mr:10,  gap: 5}}>
        <Widget sx={{
          boxShadow: 4,
          p: 2}}>
          <LikesCard/>
        </Widget>
        <Widget sx={{
          boxShadow: 4,
          p: 2,
          pl: 6}}>
          <PlaylistsCard />
        </Widget>
      </Box>
      <WallPaper />
      <Widget sx={{
          boxShadow: 4,
          mt: 16}}>
            <PlayerH5/>
          </Widget>
    </div>
  );
};
export default withLayout(Home);
