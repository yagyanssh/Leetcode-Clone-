import { initializeApp } from "firebase/app";
import { app } from "../utils/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACn8W1_EKTVNGN7_SOyyJcNSSSVc1zmvw",
  authDomain: "leetcode-clone-2cac1.firebaseapp.com",
  projectId: "leetcode-clone-2cac1",
  storageBucket: "leetcode-clone-2cac1.appspot.com",
  messagingSenderId: "665472691830",
  appId: "1:665472691830:web:ff859d37c405658b36f957",
  measurementId: "G-Y6DG04W2B4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);  