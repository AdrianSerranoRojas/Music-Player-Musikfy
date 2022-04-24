import pkg from "firebase-admin";
import config from "../config/config.js";

pkg.initializeApp({
  credential: pkg.credential.cert(config.firebase.certConfig),
});

export const auth = pkg.auth();
export const admin = pkg;
