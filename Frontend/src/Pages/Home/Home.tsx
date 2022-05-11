import withLayout from "../../hoc/withLayout";
import LikesCard from "../../components/MainCards/LikesCard/LikesCard";
import PlaylistsCard from "../../components/MainCards/PlaylistsCard/PlaylistsCard";

import "./Home.scss";
import SearchSongListing from "../../components/SearchSongListing/SearchSongListing";

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
    <div>
      <SearchSongListing />
      <LikesCard />
      <PlaylistsCard />
    </div>
  );
};
export default withLayout(Home);
