import withLayout from "../../hoc/withLayout";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard";

import "./Home.scss";
import Box from "@mui/material/Box";
import PlaylistsCardSmall from "../../components/MainCards/PlaylistsCardSmall/PlaylistsCardSmall";

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
    <Box sx={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap:4 }}>
      <LikesCard />
      <PlaylistsCardSmall />
    </Box>
  );
};
export default withLayout(Home);
