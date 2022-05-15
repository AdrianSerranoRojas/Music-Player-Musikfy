import withLayout from "../../hoc/withLayout";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard";

import "./Home.scss";
import Box from "@mui/material/Box";
import PlaylistsCardSmall from "../../components/MainCards/PlaylistsCardSmall/PlaylistsCardSmall";
import SearchSongListing from "../../components/SearchSongListing/SearchSongListing";
import PlaylistsCard from "../../components/MainCards/PlaylistsCard/PlaylistsCard";

// async function fetchUserToken(
//   setUserToken: any,
//   setLoading: any,
//   setError: any
// ): Promise<void> {
//   setLoading(true);
//   try {
//     const token = await getCurrentUserToken();
//     setUserToken(token);
//   } catch (error) {
//     setError(error);
//   } finally {
//     setLoading(false);
//   }
// }

const Home = () => {
  return (
    <Box sx={{display:'flex', gridTemplateColumns: 'repeat(2, 1fr)', gap:4 }}>
      <SearchSongListing />
      <LikesCard />
      <PlaylistsCard />
    </Box>
  );
};
export default withLayout(Home);
