import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";
import { get } from "immer/dist/internal";

// Paste your config object here ⬇️
const firebaseConfig = {
  apiKey: "AIzaSyBvy1Y66TCa4gA-bPebfsO-0TIfEd0REw8",
  authDomain: "musikfy-bc0de.firebaseapp.com",
  projectId: "musikfy-bc0de",
  storageBucket: "musikfy-bc0de.appspot.com",
  messagingSenderId: "586202660257",
  appId: "1:586202660257:web:7e59ddfffde58fc6095fe0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function singInWithGoogle() {
  const Provider = new GoogleAuthProvider();
  return signInWithPopup(auth, Provider);
}

export function singInWithEmailAndPassword(
  email: string,
  password: string
): any {
  return signInWithEmailAndPassword(auth, email, password);
}

export function singUpWithEmailAndPassword(
  email: string,
  password: string
): any {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function userSendPasswordResetEmail(email: string): any {
  return sendPasswordResetEmail(auth, email);
}

export function userSignOut() {
  return signOut(auth);
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }
  console.log(auth.currentUser.getIdToken());
  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}

export function changePassword(
  newPassword : string) {
    const auth = getAuth();

    const user= auth.currentUser;
    console.log(user);
    console.log(newPassword);
    updatePassword(user, newPassword).then(() => console.log("contraseña cambiada")).catch(() => console.log("contraseña no cambiada"))
  }
