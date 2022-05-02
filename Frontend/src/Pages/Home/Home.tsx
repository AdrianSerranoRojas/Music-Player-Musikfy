import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import withLayout from "../../hoc/withLayout";

import { createUser, usersSelector } from "../../features/users/usersSlice";

import { getCurrentUserToken } from "../../firebase/firebase";

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
  const [userFake, setuserFake] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const use = useSelector(usersSelector);
  console.log(use);

  // const currentUser = useContext(AuthContext);

  return (
    <div>
      
    </div>
  );
};

export default withLayout(Home);
