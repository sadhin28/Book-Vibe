
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG0BhQKVH_L-iXCSM24EOk96zW7L0aL4c",
  authDomain: "book-vibe-1db84.firebaseapp.com",
  projectId: "book-vibe-1db84",
  storageBucket: "book-vibe-1db84.firebasestorage.app",
  messagingSenderId: "874282162193",
  appId: "1:874282162193:web:5fa182a5e91e6936f1f9b0",
  measurementId: "G-VN84DXJLT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
export default auth;