import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnZluKfMkUrJnkA1o33WyPmyFTwVUWJ4A",
  authDomain: "caebpt-portal.firebaseapp.com",
  projectId: "caebpt-portal",
  storageBucket: "caebpt-portal.firebasestorage.app",
  messagingSenderId: "252571982173",
  appId: "1:252571982173:web:70cb0f6cc83ad5709d30b4",
  measurementId: "G-NMNHFDDFEK"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
