import axios from "axios";
import { getCurrentUserToken } from "../firebase/firebase";

export async function syncUserData(userName = "") {
  const userToken = await getCurrentUserToken();
  console.log(userName);

  var data = JSON.stringify({
    userName: userName,
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
