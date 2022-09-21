import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvzDf9CEaatiRSksFILYaIVzH0qpTVxKQ',
  authDomain: "spotify-clone-d10ad.firebaseapp.com",
  projectId: "spotify-clone-d10ad",
  storageBucket: "spotify-clone-d10ad.appspot.com",
  messagingSenderId: "515769202905",
  appId: "1:515769202905:web:ea046b8472706507f0a6c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db }