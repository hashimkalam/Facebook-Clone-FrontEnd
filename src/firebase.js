import { DeveloperBoardOffSharp } from "@mui/icons-material";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaduYs_TCViFw3nUJFdJsKzxSrH72VLGY",
  authDomain: "facebook-clone-28246.firebaseapp.com",
  projectId: "facebook-clone-28246",
  storageBucket: "facebook-clone-28246.appspot.com",
  messagingSenderId: "12888486170",
  appId: "1:12888486170:web:0f71b3999745a13547fca3",
  measurementId: "G-DQ39N94MJR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
