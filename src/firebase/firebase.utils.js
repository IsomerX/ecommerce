import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfsT-LVD2QtEn-2ocfb2DgBVWyXZAwac8",
  authDomain: "crown-db-85302.firebaseapp.com",
  projectId: "crown-db-85302",
  storageBucket: "crown-db-85302.appspot.com",
  messagingSenderId: "721803944773",
  appId: "1:721803944773:web:773e2ccbfef37f665f142c",
  measurementId: "G-LB46DN1F73",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
