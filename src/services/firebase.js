import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC2jzqo1YdEmw9sBjKPZY156mJSa-X2DQ",
  authDomain: "e-commerce-solution-41103.firebaseapp.com",
  projectId: "e-commerce-solution-41103",
  storageBucket: "e-commerce-solution-41103.appspot.com",
  messagingSenderId: "93617473737",
  appId: "1:93617473737:web:a28917fd229b1748552518",
  measurementId: "G-F02537WHN2",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
