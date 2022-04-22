import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  // Paste your config object here ⬇️
const firebaseConfig = {
  apiKey: "AIzaSyBvy1Y66TCa4gA-bPebfsO-0TIfEd0REw8",
  authDomain: "musikfy-bc0de.firebaseapp.com",
  projectId: "musikfy-bc0de",
  storageBucket: "musikfy-bc0de.appspot.com",
  messagingSenderId: "586202660257",
  appId: "1:586202660257:web:7e59ddfffde58fc6095fe0",
};

  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

export const auth = firebase.auth();

export function singInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function singInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function singUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
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
