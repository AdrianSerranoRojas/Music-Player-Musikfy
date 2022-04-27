import axios from "axios";
import { getCurrentUserToken } from "../firebase/firebase";

export async function syncUserData(userName) {
  const userToken = await getCurrentUserToken();

  return axios({
    method: "POST",
    url: "http://localhost:4000/sign-up",
    headers: {
      authorization: `Bearer ${userToken}`,
    },
    data: JSON.stringify({
      userName: userName

    })
  });
}
