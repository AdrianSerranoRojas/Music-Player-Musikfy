import axios from "axios";
import { getCurrentUserToken } from "../firebase/firebase";

export async function syncUserData(userData = "") {
  const userToken = await getCurrentUserToken();
  console.log(userData);

  var data = JSON.stringify({
    userData: userData,
  });

  var config = {
    method: "post",
    url: "http://localhost:4000/sign-up",
    headers: {
      authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
