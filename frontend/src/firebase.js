import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyApvJA_HqEpyVTJyXGzooq0CxIRLIL2xcc",
  authDomain: "yopo-09.firebaseapp.com",
  projectId: "yopo-09",
  storageBucket: "yopo-09.appspot.com",
  messagingSenderId: "405401944002",
  appId: "1:405401944002:web:f6dcb4158292a26099205b",
  measurementId: "G-WD5WT16VNJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getDatabase(app);
export default app;
