import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import withLayout from "../../hoc/withLayout";
import { createUser, usersSelector } from "../../features/users/usersSlice";
import { getCurrentUserToken } from "../../firebase/firebase";
import { useGetSongsQuery } from "../../services/songApi";

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
    </div>
  );
};
export default withLayout(Home);
