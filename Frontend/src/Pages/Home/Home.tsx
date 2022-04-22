import { useState, useEffect, useContext } from "react";
import axios from "axios";

import withLayout from "../../hoc/withLayout";
import AuthContext from "../../context/AuthContext";

import { getCurrentUserToken } from "../../firebase/firebase";

async function fetchUserToken(setUserToken, setLoading, setError) {
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

  return <div>HOME</div>;
};

export default withLayout(Home);
