import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi7kFuf-WD5KrzsTFB8rwEnL7Rn_mdEAM",
  authDomain: "blog-85008.firebaseapp.com",
  projectId: "blog-85008",
  storageBucket: "blog-85008.appspot.com",
  messagingSenderId: "20846541633",
  appId: "1:20846541633:web:f0434168c58e7d38453fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }