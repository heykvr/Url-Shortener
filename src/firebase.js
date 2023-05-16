
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvGC1w_u6TonTt6cXJkawfhMw2sIXr5Gs",
  authDomain: "url-shortener-bfb33.firebaseapp.com",
  projectId: "url-shortener-bfb33",
  storageBucket: "url-shortener-bfb33.appspot.com",
  messagingSenderId: "904345478002",
  appId: "1:904345478002:web:3b44294bc3ab7ffc22b3eb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db =app.firestore();
export default db;