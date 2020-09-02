import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWk60DR3X7IC_frLoiL5VDIve181YCL1Q",
  authDomain: "facebook-clone-c7610.firebaseapp.com",
  databaseURL: "https://facebook-clone-c7610.firebaseio.com",
  projectId: "facebook-clone-c7610",
  storageBucket: "facebook-clone-c7610.appspot.com",
  messagingSenderId: "246424029720",
  appId: "1:246424029720:web:3129753659cb77540cd16d",
  measurementId: "G-NCCM4Y72TB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
