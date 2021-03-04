// ! Importer firebase
import firebase from "firebase";

// ? Creer uns const avec le SDK de firebase en créant notre app
const config = {
  apiKey: "AIzaSyBvX8B4s1ajzBzhr5x0WBdJlftzCRdB9YI",
  authDomain: "saltychat13.firebaseapp.com",
  projectId: "saltychat13",
  storageBucket: "saltychat13.appspot.com",
  messagingSenderId: "771075991205",
  appId: "1:771075991205:web:4c032629735f36df144f4c",
};

// ! Initialiser l'application avec le const config
firebase.initializeApp(config);

// * Exporter firebase et firestore
export default firebase;
export const auth = firebase.auth;
export const db = firebase.firestore();
