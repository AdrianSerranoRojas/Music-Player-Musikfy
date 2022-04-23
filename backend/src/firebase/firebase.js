import * as admin from "firebase-admin";
import config from "../config/config";

export const _admin = admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

export const _auth = _admin.auth();

export const admin = _admin;
export const auth = _auth;
