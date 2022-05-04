import { useState, useEffect, useContext } from "react";
import axios from "axios";

import withLayout from "../../hoc/withLayout";
import AuthContext from "../../context/AuthContext";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer"

import { getCurrentUserToken } from "../../firebase/firebase";
import SongCard from "../../components/SongCard/SongCard";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard"
import Box from "@mui/material/Box";
import PlaylistsCard from "../../components/MainCards/PlaylistsCard/PlaylistsCard";

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

const Home = () => {
  const [userToken, setUserToken] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const currentUser = useContext(AuthContext);

  return(
  <>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <LikesCard/>
      <PlaylistsCard />
    </Box>
    <MusicPlayer />
  </>
  )};

export default withLayout(Home);
