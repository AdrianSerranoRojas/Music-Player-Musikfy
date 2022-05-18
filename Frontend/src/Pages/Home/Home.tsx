import withLayout from "../../hoc/withLayout";

import Box from "@mui/material/Box";

import SearchSongListing from "../../components/SearchSongListing/SearchSongListing";

import Slider from "../../components/Slider/Slider";

import "./Home.scss";

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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Slider />
      <SearchSongListing />
      {/* <PlaylistsCard /> */}
    </Box>
  );
};
export default withLayout(Home);
