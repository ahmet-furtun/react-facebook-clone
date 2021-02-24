import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAubCsfJlk_3oZBONRrZfGK83Bfi8iJzvU",
  authDomain: "facebook-clone-aea79.firebaseapp.com",
  projectId: "facebook-clone-aea79",
  storageBucket: "facebook-clone-aea79.appspot.com",
  messagingSenderId: "938475679750",
  appId: "1:938475679750:web:5a3851848796c6fc211387",
  measurementId: "G-QK67P9ST0C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
